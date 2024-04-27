package com.restaurant.latheeth;

import org.springframework.web.bind.annotation.GetMapping;
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
    
}
