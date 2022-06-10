"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
//metodo para generar codigo random
const randomNumber = () => Math.random().toString(36).slice(2);
exports.randomNumber = randomNumber;
