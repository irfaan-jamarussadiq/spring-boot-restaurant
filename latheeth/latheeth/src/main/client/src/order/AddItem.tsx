import { useState } from "react";
import { Order } from "./Orders";

type Props = {
    order: Order,
    onClose: (event: any) => void
}

function AddItem({ order, onClose }: Props) {
    const [count, setCount] = useState(order.count);

    return (
        <div className="AddItem">
            <h2>{order.item.name}</h2>
            <img className="add-item-img item-img" src={order.item.image} />
            <p>{order.item.description}</p>
            <div>
                <label>Count: </label>
                <input 
                    min="1" 
                    type="number" 
                    onChange={(e) => setCount(parseInt(e.target.value))} 
                    defaultValue={order.count} 
                />
            </div>
            <p><span className="total">Total:</span> ${(order.item.unitPrice * count).toFixed(2)}</p>
            <button className="add-to-order-btn">Add to Order</button>
            <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
    );    
}

export default AddItem;