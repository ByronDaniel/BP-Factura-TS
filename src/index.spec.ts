import {Factura} from './Models/Factura.model';
import {randomNumber} from './utils/functions/randomNumber';
describe('Test de Factura', ()=>{
    test('debe devolver una [cadena: string] con la funcion #agregarProducto', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        factura.agregarProductoDisponible("Leche",2)
        const expected = expect.any(String);
        let resultado:string | undefined;
        //Act
        resultado = factura.agregarProducto(1,"Leche");
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver una [cadena: string] con la funcion #agregarProducto', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        factura.agregarProductoDisponible("Leche",2);
        factura.agregarProducto(1,"Leche");
        const expected = expect.any(String);
        let resultado:string | undefined;
        //Act
        resultado = factura.agregarProducto(1,"Leche");
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver una [cadena: string] con la funcion #agregarProducto', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        const expected = expect.any(String);
        let resultado:string | undefined;
        //Act
        resultado = factura.agregarProducto(1,"Leche");
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver una [booleano: boolean] con la funcion #validarExisteProductoFactura', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        factura.agregarProductoDisponible("Leche",2);
        factura.agregarProducto(1,"Leche");
        const expected = true;
        let resultado:boolean;
        //Act
        resultado = factura.validarExisteProductoFactura("Leche");
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver un [1.9] al agregar [2 Leches] con la funcion #calcularTotal', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        factura.agregarProductoDisponible("Leche",0.85)
        factura.agregarProducto(2,"Leche");
        const expected : number = 1.9;
        let resultado : number;
        //Act
        resultado = factura.calcularTotal();
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver un [valor: number] con la funcion #imprimir', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        factura.agregarProductoDisponible("Leche",0.85)
        factura.agregarProducto(2,"Leche");
        const expected : boolean = true;
        let resultado : boolean;
        //Act
        resultado = factura.imprimir();
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver una [cadena: string] con la funcion #agregarProductoDisponible', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        const expected = expect.any(String);
        let resultado:string | undefined;
        //Act
        resultado = factura.agregarProductoDisponible("Leche",2);
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })

    test('debe devolver un [producto: string] con la funcion #agregarProductoDisponible', ()=>{
        //Arranque
        const factura: Factura = new Factura();
        const expected = expect.any(Object);
        let resultado:IProductosDisponibles;
        //Act
        factura.agregarProductoDisponible("Leche",2);
        resultado = factura.obtenerInfoProducto("Leche");
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })
    test('debe devolver uns [cadena: string] aleatoria con la funcion #randomNumber', ()=>{
        //Arranque
        const expected = expect.any(String);
        let resultado:String;
        //Act
        resultado = randomNumber();
        //Assert
        expect(
            resultado
        ).toEqual(
            expected
        )
    })
    randomNumber
})