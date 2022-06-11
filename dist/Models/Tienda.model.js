"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tienda = void 0;
const randomNumber_1 = require("../utils/functions/randomNumber");
class Tienda {
    constructor() {
        this.ProductosDisponibles = [];
    }
    //metodo para agregar productos a la tienda
    agregarProductoDisponible(nombreProducto, precio) {
        if (this.obtenerInfoProducto(nombreProducto) != undefined) {
            this.ProductosDisponibles.push({
                cod: (0, randomNumber_1.randomNumber)(),
                nombreProducto,
                precio,
            });
            return "Producto agregado a la Tienda";
        }
    }
    //metodo para obtener informacion de un producto, codigo y precio
    obtenerInfoProducto(nombreProducto) {
        const inforProducto = this.ProductosDisponibles.find(producto => producto.nombreProducto == nombreProducto);
        if (inforProducto != undefined) {
            return inforProducto;
        }
        else {
            return {
                nombreProducto: "",
                precio: 0
            };
        }
    }
}
exports.Tienda = Tienda;
