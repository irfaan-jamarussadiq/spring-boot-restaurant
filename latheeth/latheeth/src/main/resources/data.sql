-- Menu
insert into item(name, description, image, unit_price) values('Pakora', 'Indian fritters made with potatoes and onion, served with chutney', 'pakora.jpg', 4.99);
insert into item(name, description, image, unit_price) values('Beef Cutlet', 'Fried fritters covered in breadcrumbs with beef inner filling', 'cutlet.jpg', 8.99);
insert into item(name, description, image, unit_price) values('Shami Kabab', 'Beef and lentil patties with daal and spices', 'shami-kabab.jpg', 8.99);
insert into item(name, description, image, unit_price) values('Samosa', 'Indian triangular shaped snack stuffed with potatoes and peas', 'samosa.jpg', 3.99);

-- Order
insert into order_item(item_id, count) values(1, 5);
insert into order_item(item_id, count) values(2, 1);
insert into order_item(item_id, count) values(3, 3);
insert into order_item(item_id, count) values(4, 9);