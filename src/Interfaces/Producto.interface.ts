interface IProducto extends IProductosDisponibles {
    cant: number;
}

interface IProductosDisponibles {
    cod?: string;
    nombreProducto: string;
    precio: number;
}