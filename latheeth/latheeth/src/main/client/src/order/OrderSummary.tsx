import { useNavigate } from "react-router-dom";
import { Order } from "./Orders";

type Props = {
    orders: Array<Order>
}

function OrderSummary({ orders }: Props) {
    const navigate = useNavigate();
    const total = orders.reduce((total, order) => order.item.unitPrice * order.count + total, 0);

    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            {orders.map(order => <div key={order.item.name}>{order.count} {order.item.name}</div>)}
            <hr className="separator" />
            <p><span className="total">Total: </span>${total.toFixed(2)}</p>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
    ); 
}

export default OrderSummary;