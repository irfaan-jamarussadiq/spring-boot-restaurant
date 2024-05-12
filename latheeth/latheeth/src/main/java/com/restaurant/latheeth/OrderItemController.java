package com.restaurant.latheeth;

import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderItemController {

    private final OrderItemRepository orderRepository;

    OrderItemController(OrderItemRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/api/menu/orders")
    public Iterable<OrderItem> orders() {
        return this.orderRepository.findAll();
    }

    @PostMapping("/api/menu/orders")
    OrderItem newOrder(@RequestBody OrderItem item) {
        Optional<OrderItem> itemInDB = this.orderRepository.findById(item.getId());
        if (itemInDB.isPresent()) {
            return this.orderRepository.save(itemInDB.get());
        } else {
            return this.orderRepository.save(item);
        }
    }    
    
}
