export const tablesInit =
    `
CREATE TABLE IF NOT EXISTS customer
(
  id serial primary key not null ,
  name character varying not null,
  email character varying unique,
  password character varying,
  google_id character varying unique,
  google_email character varying unique
);

CREATE TABLE IF NOT EXISTS role
(
  id serial primary key not null,
  name character varying unique not null
);

CREATE TABLE IF NOT EXISTS customer_role
(
  customer_id bigint references customer (id) ON DELETE CASCADE,
  role_id bigint references role (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS category
(
  id serial primary key not null,
  name character varying unique not null,
  parent_id bigint references category (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS dish
(
  id serial primary key not null,
  name character varying unique not null,
  price integer not null,
  image text not null,
  description text not null,
  mass character varying,
  length character varying,
  category_id bigint references category (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS cart
(
  id serial primary key not null,
  dish_id bigint references dish (id) ON DELETE CASCADE,
  customer_id bigint references customer (id) ON DELETE CASCADE,
  quantity integer not null,
  total numeric not null,
);

CREATE TABLE IF NOT EXISTS reservation
(
  id serial primary key not null ,
  guests_count int not null,
  date timestamp with time zone not null,
  customer_id bigint references customer (id) ON DELETE CASCADE,
  cart_id bigint references cart(id) ON DELETE CASCADE
);

CREATE TABLE reservation_dish
(
  reservation_id bigint references reservation (id) ON DELETE CASCADE,
  dish_id bigint references dish (id) ON DELETE CASCADE,
  quantity integer not null,
  total numeric not null
);
`;