package com.restaurant.latheeth;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "menu_item")
class MenuItem {
    private @Id @GeneratedValue(strategy=GenerationType.IDENTITY) Long id;
    private String name; 
    private String image;
    private String description;

    @SuppressWarnings("unused")
    private MenuItem() {}

    public MenuItem(String name, String image, String description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }        

    public String getDescription() {
        return description;
    }    
}
