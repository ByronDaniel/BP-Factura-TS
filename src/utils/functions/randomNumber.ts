//metodo para generar codigo random
const randomNumber = () : string => Math.random().toString(36).slice(2);

export{
    randomNumber
}