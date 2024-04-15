package com.restaurant.latheeth;

import org.springframework.data.repository.CrudRepository;

interface MenuRepository extends CrudRepository<MenuItem, Long> {
    Iterable<MenuItem> findByName(String name);
}
