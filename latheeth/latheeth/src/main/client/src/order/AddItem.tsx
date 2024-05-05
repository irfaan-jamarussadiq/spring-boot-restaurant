import { useState } from "react";
import { Item } from "../menu/MenuItem";

type Props = {
    item: Item,
    updateOrder: (count: number) => void,
    onClose: (event: any) => void
}

function AddItem({ item, updateOrder, onClose }: Props) {
    const [count, setCount] = useState(0);

    function addItemAndClose(event: React.MouseEvent<HTMLButtonElement>) {
        updateOrder(count);
        onClose(event);
    }

    return (
        <div className="AddItem">
            <h2>{item.name}</h2>
            <img className="add-item-img item-img" src={item.image} />
            <p>{item.description}</p>
            <div>
                <label>Count: </label>
                <input 
                    min="0" 
                    type="number" 
                    onChange={(e) => setCount(parseInt(e.target.value))} 
                    defaultValue={0} 
                />
            </div>
            <p><span className="total">Total:</span> ${(item.unitPrice * count).toFixed(2)}</p>
            <button className="add-btn order-btn" onClick={addItemAndClose}>Update Order</button>
            <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
    );    
}

export default AddItem;