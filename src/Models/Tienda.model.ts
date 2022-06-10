import {randomNumber} from '../utils/functions/randomNumber';
export class Tienda {
    private ProductosDisponibles: IProductosDisponibles[];
    
    constructor() {
      this.ProductosDisponibles = [];
    }
    
    //metodo para agregar productos a la tienda
    agregarProductoDisponible(nombreProducto: string, precio: number) : string | undefined{
      let nuevoProducto: IProductosDisponibles = {
        cod: randomNumber(),
        nombreProducto,
        precio,
      };
      let existeProducto: IProductosDisponibles = this.obtenerInfoProducto(nombreProducto);
      if (existeProducto.cod == "") {
        this.ProductosDisponibles.push(nuevoProducto);
        return "Producto agregado a la Tienda";
      }
    }
  
    //metodo para obtener informacion de un producto, codigo y precio
    obtenerInfoProducto(nombreProducto: string): IProductosDisponibles {
      let productoInformacion: IProductosDisponibles = {
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
  