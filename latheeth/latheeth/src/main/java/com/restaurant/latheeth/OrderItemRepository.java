package com.restaurant.latheeth;

import org.springframework.data.repository.CrudRepository;

public interface OrderItemRepository extends CrudRepository<OrderItem, Long> {
    
}
