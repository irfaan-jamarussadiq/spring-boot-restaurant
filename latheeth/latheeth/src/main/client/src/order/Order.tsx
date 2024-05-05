import './Order.css';
import { useEffect, useState } from "react";
import { Item } from "../menu/MenuItem";
import OrderItemCard from "./OrderItemCard";
import OrderSummary from './OrderSummary';
import useFetchMenu from '../menu/useFetchMenu';
// import Cart from "../assets/cart.svg?react";


export type OrderItem = {
    item: Item,
    count: number
}

function Order() {
    const { menu, error } = useFetchMenu();
    const [orderItems, setOrderItems] = useState<Array<OrderItem>>([]);
    const [cartVisible, setCartVisible] = useState(false);

    useEffect(() => {
        let ignore = false;
    
        fetch("http://localhost:8080/api/menu/orders")
            .then(response => response.json())
            .then(json => { 
                if (!ignore) setOrderItems(json) 
            })
            .catch(error => console.log(error));
        
        return () => {
            ignore = true;
        };
    }, []);

    function updateOrder(item: Item, count: number) {
        if (count <= 0) {
            return;
        }

        fetch("http://localhost:8080/api/menu/orders", { 
            method: "POST", 
            headers: { admin: "true", "Content-Type": "application/json" },
            body: JSON.stringify({ item: item, count: count }) 
        });

        const found = orderItems.find(orderItem => orderItem.item.name === item.name);
        const newCount = found ? count + found.count : count;
        const orderWithoutItemFound = orderItems.filter(orderItem => orderItem.item.name !== item.name);
        setOrderItems([...orderWithoutItemFound, { item: item, count: newCount } ]);
    }

    function removeItem(item: Item) {
        const newItems = orderItems.filter(orderItem => orderItem.item.name !== item.name);
        setOrderItems(newItems);
    }

    return (
        <div className="Orders">
            <h1>Orders</h1>
            <div className="menu-items">
                {error ? 
                    <p>Could not find orders</p> :
                    menu.map(item => <OrderItemCard key={item.name} item={item} updateOrder={updateOrder} />)
                }
            </div>
            {cartVisible && <OrderSummary orderItems={orderItems} removeItem={removeItem} onClose={() => setCartVisible(false)} />}
            <button className="show-cart" onClick={() => setCartVisible(!cartVisible)}>
                {/* <Cart /> */}
                <svg className="cart-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
            </button>
        </div>
    )
}

export default Order;