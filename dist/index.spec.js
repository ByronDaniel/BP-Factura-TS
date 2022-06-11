"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Factura_model_1 = require("./Models/Factura.model");
const randomNumber_1 = require("./utils/functions/randomNumber");
describe('Test de Factura', () => {
    test('debe devolver una [cadena: string] con la funcion #agregarProducto', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        factura.agregarProductoDisponible("Leche", 2);
        const expected = expect.any(String);
        let resultado;
        //Act
        resultado = factura.agregarProducto(1, "Leche");
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver una [cadena: string] con la funcion #agregarProducto', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        factura.agregarProductoDisponible("Leche", 2);
        factura.agregarProducto(1, "Leche");
        const expected = expect.any(String);
        let resultado;
        //Act
        resultado = factura.agregarProducto(1, "Leche");
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver una [cadena: string] con la funcion #agregarProducto', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        const expected = expect.any(String);
        let resultado;
        //Act
        resultado = factura.agregarProducto(1, "Leche");
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver una [booleano: boolean] con la funcion #validarExisteProductoFactura', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        factura.agregarProductoDisponible("Leche", 2);
        factura.agregarProducto(1, "Leche");
        const expected = true;
        let resultado;
        //Act
        resultado = factura.validarExisteProductoFactura("Leche");
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver un [1.9] al agregar [2 Leches] con la funcion #calcularTotal', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        factura.agregarProductoDisponible("Leche", 0.85);
        factura.agregarProducto(2, "Leche");
        const expected = 1.9;
        let resultado;
        //Act
        resultado = factura.calcularTotal();
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver un [valor: number] con la funcion #imprimir', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        factura.agregarProductoDisponible("Leche", 0.85);
        factura.agregarProducto(2, "Leche");
        const expected = true;
        let resultado;
        //Act
        resultado = factura.imprimir();
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver una [cadena: string] con la funcion #agregarProductoDisponible', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        const expected = expect.any(String);
        let resultado;
        //Act
        resultado = factura.agregarProductoDisponible("Leche", 2);
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver un [producto: string] con la funcion #agregarProductoDisponible', () => {
        //Arranque
        const factura = new Factura_model_1.Factura();
        const expected = expect.any(Object);
        let resultado;
        //Act
        factura.agregarProductoDisponible("Leche", 2);
        resultado = factura.obtenerInfoProducto("Leche");
        //Assert
        expect(resultado).toEqual(expected);
    });
    test('debe devolver uns [cadena: string] aleatoria con la funcion #randomNumber', () => {
        //Arranque
        const expected = expect.any(String);
        let resultado;
        //Act
        resultado = (0, randomNumber_1.randomNumber)();
        //Assert
        expect(resultado).toEqual(expected);
    });
    randomNumber_1.randomNumber;
});
