import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderItem() {
    const navigate = useNavigate();
    const { state: order } = useLocation();
    const [count, setCount] = useState(order.count);

    return (
        <div>
            <h1>{order.item.name}</h1>
            <img className="item-img" src={`/${order.item.image}`} alt={order.item.description} />
            <p>{order.item.description}</p>
            <span className="total">Count:</span>
            <input 
                id="count"
                name="count"
                type="number" 
                min="0" 
                defaultValue={count}
                onChange={(e) => setCount(e.target.value)} />
            <p><span className="total">Item Total:</span> ${(order.count * order.item.unitPrice).toFixed(2)}</p>
            <button onClick={() => navigate("/order", { state: {...order, count: count} })}>Back to Order</button>
            <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
    )
}

export default OrderItem;