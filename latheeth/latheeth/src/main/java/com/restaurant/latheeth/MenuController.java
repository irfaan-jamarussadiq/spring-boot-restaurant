package com.restaurant.latheeth;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    private final MenuRepository menuRepository;

    MenuController(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    @GetMapping("/api/menu/items")
    public Iterable<MenuItem> items() {
        return this.menuRepository.findAll();
    }

    @GetMapping("/api/menu/items/{name}")
    public Iterable<MenuItem> menuItemsByName(@PathVariable String name) {
        return this.menuRepository.findByName(capitalize(name));
    }    

    private String capitalize(String name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();        
    }
}