"use strict";
class Factura {
    constructor() {
        this.newUID = () => Math.random().toString(36).slice(2);
        this.productos = [];
        this.total = 0;
        this.subtotal = 0;
        this.iva = 0;
    }
    agregarProducto(producto) {
        let totalProductos = producto.precio * producto.cantidad;
        this.subtotal += totalProductos;
        producto.precioTotal = totalProductos;
        producto.codigo = this.newUID();
        this.productos.push(producto);
    }
    verProductos() {
        this.productos.forEach((producto) => {
            var _a;
            console.log(`Cod: ${producto.codigo}, Cant: ${producto.cantidad}, prod: ${producto.nombre}, precio: ${producto.precio.toFixed(2)}, total ${(_a = producto.precioTotal) === null || _a === void 0 ? void 0 : _a.toFixed(2)}`);
        });
    }
    calcularTotal() {
        this.iva = this.subtotal * 0.12;
        this.total = this.subtotal + this.iva;
    }
    imprimir() {
        this.calcularTotal();
        console.log("----- Factura -----");
        this.verProductos();
        console.log(`Subtotal: ${this.subtotal.toFixed(2)}`);
        console.log(`IVA 12%: ${(this.iva).toFixed(2)}`);
        console.log(`Total: ${this.total.toFixed(2)}`);
    }
}
const factura = new Factura();
factura.agregarProducto({ cantidad: 2, nombre: "Aceite", precio: 1.5 });
factura.agregarProducto({ cantidad: 3, nombre: "Jamon", precio: 3 });
factura.agregarProducto({ cantidad: 1, nombre: "Leche", precio: 2 });
factura.agregarProducto({ cantidad: 5, nombre: "Pan", precio: 0.15 });
factura.agregarProducto({ cantidad: 1, nombre: "Sicafe", precio: 0.40 });
factura.imprimir();
