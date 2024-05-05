import { useState } from "react";
import { createPortal } from "react-dom";
import AddItem from "./AddItem";
import { Item } from "../menu/MenuItem";

type Props = {
    item: Item,
    updateOrder: (item: Item, count: number) => void
}

function OrderItemCard({ item, updateOrder }: Props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="MenuItem">
            <h2>{item.name}</h2>
            <img className="order-item-img item-img" src={item.image} alt={item.description} />
            <p className="item-description">{item.description}</p>
            <hr className="separator" />
            <div className="order-details">
                <button className="add-btn item-btn" onClick={() => setShowModal(true)}>
                    Add Item
                </button>
                {showModal && createPortal(
                    <div className="modal-container animated">
                        <AddItem item={item} updateOrder={(count: number) => updateOrder(item, count)} onClose={() => setShowModal(false)} />
                    </div>, 
                    document.body
                )}                
                <span>${item.unitPrice.toFixed(2)}</span>
            </div>
        </div>
    ); 
}

export default OrderItemCard;