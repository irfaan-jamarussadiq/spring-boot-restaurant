package com.restaurant.latheeth;

import org.springframework.data.repository.CrudRepository;

interface ItemRepository extends CrudRepository<Item, Long> {
    Iterable<Item> findByName(String name);
}
