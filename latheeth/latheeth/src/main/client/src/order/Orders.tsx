import { useState, useEffect } from "react";
import { Item } from "../menu/MenuItem";
import OrderSummary from "./OrderSummary";
import { createPortal } from "react-dom";
import AddItem from "./AddItem";
import './Order.css';

export type Order = {
    item: Item,
    count: number
}

// TODO:
// Each order card should have an 'Add Item' button that opens a new modal window for the item. [DONE]
// The modal should show the name, image, description, total price, and item count. [DONE]
// The modal should be in the center of the screen and grey out the background when open. [DONE]
// Accessibility of the modal should be taken into account.
// There should be a UI control to increase and decrease the item count.
//  - One potential setup could be having the count with the (+) to the left and (-) to the right.
//  - Or simply have Count: ______ as an input field. The input field should be styled so it looks like an underline. Should be type number input.
// There should be an option to close the modal.
//    - Could be an 'x' at the top right corner
//    - Could be a button with the word 'Close' at the bottom right
// There should be an option to add the item with the requested count to the order.

function Orders() {
    const [orders, setOrders] = useState<Array<Order>>([]);
    const [error, setError] = useState<string>("");

    function addItemToOrder(item: Item) {
        const order = orders.find(order => order.item.name === item.name);
        const newItems = orders.map(order => order.item.name === item.name ? { ...order, count: order.count + 1 } : order);
        if (order) {
            setOrders(newItems);   
        } else {
            setOrders([...newItems, { item: item, count: 1}]);
        }
    }

    useEffect(() => {
        let ignore = false;

        fetch("http://localhost:8080/api/menu/orders")
            .then(response => response.json())
            .then(json => {
                if (!ignore) setOrders(json)
            })
            .catch(error => setError(error));
        
        return () => { 
            ignore = false;
        };
    }, []);

    return (
        <div className="Orders">
            <div className="order-items">
                <h1>Orders</h1>
                {error.length == 0 ? (
                    <div className="menu-items">{orders.map(order => <Order key={order.item.name} order={order} />)}</div>
                ) : <p>{error}</p>}
            </div>
            {/* <OrderSummary orders={orders.filter(order => order.count > 0)} /> */}
        </div>
    )
}

type Props = {
    order: Order
}

function Order({ order }: Props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="MenuItem">
            <h2>{order.item.name}</h2>
            <img className="order-item-img item-img" src={order.item.image} alt={order.item.description} />
            <p className="item-description">{order.item.description}</p>
            <hr className="separator" />
            <div className="order-details">
                <button className="add-item-btn" onClick={() => setShowModal(true)}>
                    Add Item
                </button>
                {showModal && createPortal(
                    <div className="modal-container animated">
                        <AddItem order={order} onClose={() => setShowModal(false)} />
                    </div>, 
                    document.body
                )}                
                <span>${order.item.unitPrice.toFixed(2)}</span>
            </div>
        </div>
    ); 
}

export default Orders;