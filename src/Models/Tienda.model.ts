import {randomNumber} from '../utils/functions/randomNumber';
export class Tienda {
    private ProductosDisponibles: IProductosDisponibles[];
    
    constructor() {
      this.ProductosDisponibles = [];
    }
    
    //metodo para agregar productos a la tienda
    agregarProductoDisponible(nombreProducto: string, precio: number) : string | undefined{
      if (this.obtenerInfoProducto(nombreProducto) != undefined) {
        this.ProductosDisponibles.push({
          cod: randomNumber(),
          nombreProducto,
          precio,
        });
        return "Producto agregado a la Tienda";
      }
    }
  
    //metodo para obtener informacion de un producto, codigo y precio
    obtenerInfoProducto(nombreProducto: string): IProductosDisponibles {
      const inforProducto = this.ProductosDisponibles.find(producto => producto.nombreProducto == nombreProducto);
      if(inforProducto != undefined){
        return inforProducto;
      }else{
        return{
          nombreProducto:"",
          precio:0
        }
      }
    }
}
