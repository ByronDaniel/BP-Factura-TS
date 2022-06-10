import {Tienda} from './Tienda.model';
export class Factura extends Tienda {
    private ProductosFactura: IProducto[];
    private Total: ITotal;
    private Msg: string;
    
    constructor() {
      super();
      this.ProductosFactura = [];
      this.Total = {
        totalItems: 0,
        subTotal: 0,
        total: 0
      };
      this.Msg = ""
    }
  
    //metodo para agregar producto a la factura
    agregarProducto(cant: number, producto: string): string | undefined {
      let infoProducto: IProductosDisponibles = this.obtenerInfoProducto(producto);
      if (infoProducto.cod != "" && infoProducto.cod != null) {
        this.Total.totalItems += cant;
        this.Total.subTotal += infoProducto.precio * cant;
        let productoGenerado: IProducto = {
          nombreProducto: producto,
          cant: cant,
          precio: infoProducto.precio,
          cod: infoProducto.cod,
        };
        this.ProductosFactura.push(productoGenerado);
        this.Msg = `Producto Agregado: ${producto} - Cantidad: ${cant}`;
        console.log(this.Msg);
        return this.Msg;
      } 
    }
    
    //metodo para calcular el total (subtotal + iva)
    calcularTotal(): number {
      let total = parseFloat((this.Total.subTotal + this.Total.subTotal * 0.12).toFixed(2));
      this.Total.total = total;
      return total;
    }
    
    //metodo para imprimir los detalles de la factura
    imprimir(): boolean {
      this.calcularTotal();
      console.log("************\n************\n************\n");
      console.log(`ProductosFactura Factura => `, this.ProductosFactura);
      console.log(`Total Factura => `, this.Total);
      return true;
    }
}
