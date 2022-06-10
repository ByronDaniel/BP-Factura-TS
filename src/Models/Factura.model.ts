import {Tienda} from './Tienda.model';
export class Factura extends Tienda {
    private ProductosFactura: IProducto[];
    private Total: ITotal;
  
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
    agregarProducto(cant: number, producto: string): void {
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
        console.log(`Producto Agregado: ${producto} - Cantidad: ${cant}`);
      } else {
        console.log(
          `Producto No Agregado - No existe en el sistema: ${producto} - Cantidad: ${cant}`
        );
      }
    }
    
    //metodo para calcular el total (subtotal + iva)
    private calcularTotal(): void {
      let total = this.Total.subTotal + this.Total.subTotal * 0.12;
      this.Total.total = parseFloat(total.toFixed(2));
    }
    
    //metodo para imprimir los detalles de la factura
    imprimir(): void {
      this.calcularTotal();
      console.log("************\n************\n************\n");
      console.log(`ProductosFactura Factura => `, this.ProductosFactura);
      console.log(`Total Factura => `, this.Total);
    }
}
