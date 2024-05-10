create database fastFood;

use fastFood;


Create table if not exists users (
	id_U int auto_increment not null primary key,
    email varchar (100),
    contrasenia varchar(100),
    nombres varchar (70),
    apellidos varchar (70),
    direccion varchar(100)
);

Create table if not exists menu(
	id_menu int auto_increment not null primary key,
    nombre varchar (40),
    precio float,
    descripcion varchar (200)
);

/* Se crea una tabla puente llamada PEDIDOS que va a referenciar las dos tablas de USERS Y MENU */

create table if not exists pedidos(
	id_pedido int auto_increment not null primary key,
    id_usuario int,
    id_menuu int,
    direccion_entrega varchar (100),
    foreign key (id_usuario) references users(id_U),
    foreign key (id_menuu) references menu(id_menu)
);