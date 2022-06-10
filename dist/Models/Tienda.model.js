"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tienda = void 0;
const randomNumber_1 = require("../utils/functions/randomNumber");
class Tienda {
    constructor() {
        this.ProductosDisponibles = [];
    }
    consultarProductosDisponibles() {
        return this.ProductosDisponibles;
    }
    //metodo para agregar productos a la tienda
    agregarProductoDisponible(nombreProducto, precio) {
        let nuevoProducto = {
            cod: (0, randomNumber_1.randomNumber)(),
            nombreProducto,
            precio,
        };
        let existeProducto = this.obtenerInfoProducto(nombreProducto);
        if (existeProducto.cod == "") {
            this.ProductosDisponibles.push(nuevoProducto);
        }
    }
    //metodo para obtener informacion de un producto, codigo y precio
    obtenerInfoProducto(nombreProducto) {
        let productoInformacion = {
            nombreProducto: "",
            cod: "",
            precio: 0,
        };
        this.ProductosDisponibles.forEach((e) => {
            if (e.nombreProducto == nombreProducto) {
                productoInformacion = e;
            }
        });
        return productoInformacion;
    }
}
exports.Tienda = Tienda;
