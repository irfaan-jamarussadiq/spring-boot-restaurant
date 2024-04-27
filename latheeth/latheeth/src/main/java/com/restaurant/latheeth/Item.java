package com.restaurant.latheeth;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
class Item implements Serializable {
    private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
    private String name; 
    private String description;
    private BigDecimal unitPrice;
    private String image;    

    @SuppressWarnings("unused")
    private Item() {}

    public Item(String name, String description, BigDecimal unitPrice, String image) {
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }
    
    public String getImage() {
        return image;
    }            
}
