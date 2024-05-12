import { useLocation } from "react-router-dom";
import { Item } from "../menu/MenuItem";
import { OrderItem } from "./Order";

function OrderCheckout() {
    const { state } = useLocation();
    const orderItems: Array<OrderItem> = state;
    const total = orderItems.reduce((currentTotal, orderItem: OrderItem) => currentTotal + orderItem.item.unitPrice * orderItem.count, 0)

    return (
        <div>
            <h1>Order Checkout</h1>
            <div className="checkout-items">
                {orderItems.map((orderItem) => <CheckoutItem key={orderItem.item.name} item={orderItem.item} count={orderItem.count} />)}
            </div>
            <p>Total: <span>${total.toFixed(2)}</span></p>            
        </div>
    )
}

type CheckoutItemProps = {
    item: Item,
    count: number
}

function CheckoutItem({ item, count }: CheckoutItemProps) {
    return (
        <div className="checkout-item">
            <h3>{item.name}</h3>
            <img className="checkout-item-img" src={item.image} alt={item.description} />
            <p>Item Count: {count}</p>
        </div>
    );
}

export default OrderCheckout;