package com.restaurant.latheeth;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
class OrderItem implements Serializable {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    @OneToOne
    @JoinColumn(name="item_id")
    private Item item;
    private int count;

    public OrderItem(Item item, int count) {
        this.item = item;
        this.count = count;
    }

    @SuppressWarnings("unused")
    private OrderItem() {}

    public Item getItem() {
        return item;
    }

    public int getCount() {
        return count;
    }
}
