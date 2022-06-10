class Products {
  private RegisteredProducts: RegisteredProducts[];
  private Products: Factura[];
  private Total: Total;

  constructor() {
    this.RegisteredProducts = [];
    this.Products = [];
    this.Total = {
      totalItems: 0,
      subTotal: 0,
      total: 0,
    };
  }

  //metodo para agregar productos a la tienda
  agregarProductoInfo(name: string, price: number) {
    let newProduct: RegisteredProducts = {
      cod: this.newUID(),
      name,
      price,
    };
    let existProduct: RegisteredProducts = this.obtenerInfoProducto(name);
    if (existProduct.cod == "") {
      this.RegisteredProducts.push(newProduct);
    }
  }

  //metodo para obtener informacion de un producto, codigo y precio
  obtenerInfoProducto(name: string): any {
    let product: RegisteredProducts = {
      name: "",
      cod: "",
      price: 0,
    };
    this.RegisteredProducts.forEach((e) => {
      if (e.name == name) {
        product = e;
      }
    });
    return product;
  }

  //metodo para generar codigo random
  private newUID = (): string => Math.random().toString(36).slice(2);

  //metodo para agregar producto a la factura
  agregarProducto(cant: number, producto: string): void {
    let infoProducto: RegisteredProducts = this.obtenerInfoProducto(producto);
    if (infoProducto.cod != "" && infoProducto.cod != null) {
      this.Total.totalItems += cant;
      this.Total.subTotal += infoProducto.price * cant;
      let productoGenerado: Factura = {
        name: producto,
        cant: cant,
        price: infoProducto.price,
        cod: infoProducto.cod,
      };
      this.Products.push(productoGenerado);
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
    console.log(`Products Factura => `, this.Products);
    console.log(`Total Factura => `, this.Total);
  }
}
//Interfaces
interface Factura extends RegisteredProducts {
  cant: number;
}
interface RegisteredProducts {
  cod?: string;
  name: string;
  price: number;
}
interface Total {
  totalItems: number;
  subTotal: number;
  total: number;
}

//Ejecucion del Programa
const factura = new Products();
//Agrego Productos al Sistema
factura.agregarProductoInfo("Pan", 0.18);
factura.agregarProductoInfo("Aceite", 1.5);
factura.agregarProductoInfo("Leche", 1);
factura.agregarProductoInfo("Atun", 1.5);
factura.agregarProductoInfo("Mortadela", 1);
factura.agregarProductoInfo("Mortadela", 1);

//Agrego Productos a la Factura
factura.agregarProducto(2, "Aceite");
factura.agregarProducto(3, "Jamon");
factura.agregarProducto(1, "Leche");
factura.agregarProducto(5, "Pan");
factura.agregarProducto(1, "Sicafe");

//Imprimo Factura
factura.imprimir();
