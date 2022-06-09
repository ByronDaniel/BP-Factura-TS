class Factura{
    private productos : IProducto[];
    private total : number;
    private subtotal : number;
    private iva : number;
    
    constructor(){
        this.productos = [];
        this.total = 0;
        this.subtotal = 0;
        this.iva = 0;
    }
    agregarProducto(producto : IProducto) : void {
        let totalProductos = producto.precio * producto.cantidad;
        this.subtotal += totalProductos;
        producto.precioTotal = totalProductos;
        producto.codigo = this.newUID();
        this.productos.push(producto);
    }
    
    private verProductos() : void {
        this.productos.forEach((producto)=>{
            console.log(`Cod: ${producto.codigo}, Cant: ${producto.cantidad}, prod: ${producto.nombre}, precio: ${producto.precio.toFixed(2)}, total ${producto.precioTotal?.toFixed(2)}`);
        })
    }

    private calcularTotal() : void {
        this.iva = this.subtotal * 0.12;
        this.total = this.subtotal + this.iva;
    }
    
    imprimir() : void {
        this.calcularTotal();
        console.log("----- Factura -----")
        this.verProductos();
        console.log(`Subtotal: ${this.subtotal.toFixed(2)}`);
        console.log(`IVA 12%: ${(this.iva).toFixed(2)}`);
        console.log(`Total: ${this.total.toFixed(2)}`);
    }
}
class AdminStore{
    private productosInfo : IProductoInfo[];
    constructor(){
        this.productosInfo = [];
    }
    agregarProducto(productoInfo : IProductoInfo){
        this.productosInfo.forEach(producto => {
            if(producto.nombre.toUpperCase() == productoInfo.nombre.toUpperCase()){
                console.log("Ya existe el producto");
            }else{
                let codigo : string = this.newUID();
                this.productosInfo.push(productoInfo);
            }
        });
    }
    private newUID = (): string => Math.random().toString(36).slice(2)
}
interface IProducto extends IProductoInfo{
    cantidad: number,
    precioTotal?: number
}

interface IProductoInfo{
    codigo?: string,
    nombre : string,
    precio? : number,
}

const factura = new Factura();

factura.agregarProducto({cantidad: 2, nombre : "Aceite"});
factura.agregarProducto({cantidad: 3, nombre : "Jamon"});
factura.agregarProducto({cantidad: 1, nombre : "Leche"});
factura.agregarProducto({cantidad: 5, nombre : "Pan"});
factura.agregarProducto({cantidad: 1, nombre : "Sicafe"});
factura.imprimir();
