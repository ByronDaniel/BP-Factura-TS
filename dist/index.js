"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factura_model_1 = require("./Models/Factura.model");
//Ejecucion del Programa
const factura = new Factura_model_1.Factura();
//Agrego Productos al Sistema
factura.agregarProductoDisponible("Pan", 0.18);
factura.agregarProductoDisponible("Aceite", 1.5);
factura.agregarProductoDisponible("Leche", 1);
factura.agregarProductoDisponible("Atun", 1.5);
factura.agregarProductoDisponible("Mortadela", 1);
factura.agregarProductoDisponible("Mortadela", 1);
//Agrego Productos a la Factura
factura.agregarProducto(2, "Aceite");
factura.agregarProducto(2, "Aceite");
factura.agregarProducto(2, "Aceite");
factura.agregarProducto(3, "Jamon");
factura.agregarProducto(1, "Leche");
factura.agregarProducto(5, "Pan");
factura.agregarProducto(1, "Sicafe");
//Imprimo Factura
factura.imprimir();
