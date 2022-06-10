"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
const Tienda_model_1 = require("./Tienda.model");
class Factura extends Tienda_model_1.Tienda {
    constructor() {
        super();
        this.ProductosFactura = [];
        this.Total = {
            totalItems: 0,
            subTotal: 0,
            total: 0,
        };
    }
    //metodo para agregar producto a la factura
    agregarProducto(cant, producto) {
        let infoProducto = this.obtenerInfoProducto(producto);
        if (infoProducto.cod != "" && infoProducto.cod != null) {
            this.Total.totalItems += cant;
            this.Total.subTotal += infoProducto.precio * cant;
            let productoGenerado = {
                nombreProducto: producto,
                cant: cant,
                precio: infoProducto.precio,
                cod: infoProducto.cod,
            };
            this.ProductosFactura.push(productoGenerado);
            console.log(`Producto Agregado: ${producto} - Cantidad: ${cant}`);
        }
        else {
            console.log(`Producto No Agregado - No existe en el sistema: ${producto} - Cantidad: ${cant}`);
        }
    }
    //metodo para calcular el total (subtotal + iva)
    calcularTotal() {
        let total = this.Total.subTotal + this.Total.subTotal * 0.12;
        this.Total.total = parseFloat(total.toFixed(2));
    }
    //metodo para imprimir los detalles de la factura
    imprimir() {
        this.calcularTotal();
        console.log("************\n************\n************\n");
        console.log(`ProductosFactura Factura => `, this.ProductosFactura);
        console.log(`Total Factura => `, this.Total);
    }
}
exports.Factura = Factura;
