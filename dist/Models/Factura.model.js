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
            total: 0
        };
        this.Msg = "";
    }
    //metodo para agregar producto a la factura
    agregarProducto(cant, producto) {
        let infoProducto = this.obtenerInfoProducto(producto);
        if (infoProducto.cod != "" && infoProducto.cod != null) {
            this.Total.totalItems += cant;
            this.Total.subTotal += infoProducto.precio * cant;
            if (!this.validarExisteProductoFactura(producto)) {
                let productoGenerado = {
                    nombreProducto: producto,
                    cant: cant,
                    precio: infoProducto.precio,
                    cod: infoProducto.cod,
                };
                this.ProductosFactura.push(productoGenerado);
            }
            else {
                const indexProduct = this.ProductosFactura.findIndex(product => product.nombreProducto == producto);
                this.ProductosFactura[indexProduct].cant += cant;
            }
            this.Msg = `Producto Agregado: ${producto} - Cantidad: ${cant}`;
        }
        else {
            this.Msg = `Producto No Agregado: ${producto} - Cantidad: ${cant}`;
        }
        console.log(this.Msg);
        return this.Msg;
    }
    validarExisteProductoFactura(nombreProducto) {
        const producto = this.ProductosFactura.find(producto => producto.nombreProducto == nombreProducto);
        if (producto != undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    //metodo para calcular el total (subtotal + iva)
    calcularTotal() {
        let total = parseFloat((this.Total.subTotal + this.Total.subTotal * 0.12).toFixed(2));
        this.Total.total = total;
        return total;
    }
    //metodo para imprimir los detalles de la factura
    imprimir() {
        this.calcularTotal();
        console.log("************\n************\n************\n");
        console.log(`ProductosFactura Factura => `, this.ProductosFactura);
        console.log(`Total Factura => `, this.Total);
        return true;
    }
}
exports.Factura = Factura;
