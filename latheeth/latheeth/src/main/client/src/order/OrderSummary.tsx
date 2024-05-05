import { useNavigate } from "react-router-dom";
import { OrderItem } from "./Order";
import { Item } from "../menu/MenuItem";

type Props = {
    orderItems: Array<OrderItem>,
    removeItem: (item: Item) => void,
    onClose: () => void
}

function OrderSummary({ orderItems, removeItem, onClose } : Props) {
    const total = orderItems.reduce((total, orderItem) => total + orderItem.count * orderItem.item.unitPrice, 0);
    const navigate = useNavigate();

    return (
        <div className="OrderSummary">
            <div className="order-summary-wrapper">
                <button className="close-btn" onClick={onClose}>
                    <div className="close-symbol">✖</div>
                </button>
                <h2>Order Summary</h2>
                {orderItems.map(orderItem => (
                    <div className="order-item-row" key={orderItem.item.name}>
                        <p className="order-count">x{orderItem.count} {orderItem.item.name}</p>
                        <div>
                            <button className="edit-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                            </button>
                            <button className="delete-btn" onClick={() => removeItem(orderItem.item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                            </button>
                        </div>
                    </div>
                ))}
                <hr className="separator" />
                <p className="order-count">
                    <span className="total">Total:</span> ${total.toFixed(2)}
                </p>
                <button className="checkout-btn" onClick={() => navigate("/checkout", { state: orderItems })}>Go to checkout</button>
            </div>
        </div>        
    );    
}

export default OrderSummary;