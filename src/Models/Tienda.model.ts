import {randomNumber} from '../utils/functions/randomNumber';
export class Tienda {
    private ProductosDisponibles: IProductosDisponibles[];
    
    constructor() {
      this.ProductosDisponibles = [];
    }
  
    consultarProductosDisponibles() : IProductosDisponibles[]{
      return this.ProductosDisponibles;
    }
    
    //metodo para agregar productos a la tienda
    agregarProductoDisponible(nombreProducto: string, precio: number) {
      let nuevoProducto: IProductosDisponibles = {
        cod: randomNumber(),
        nombreProducto,
        precio,
      };
      let existeProducto: IProductosDisponibles = this.obtenerInfoProducto(nombreProducto);
      if (existeProducto.cod == "") {
        this.ProductosDisponibles.push(nuevoProducto);
      }
    }
  
    //metodo para obtener informacion de un producto, codigo y precio
    protected obtenerInfoProducto(nombreProducto: string): any {
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
  