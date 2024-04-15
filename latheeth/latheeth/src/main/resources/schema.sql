create table if not exists menu_item 
(
    id  serial primary key,
    name text not null,
    image text,
    description text not null
);