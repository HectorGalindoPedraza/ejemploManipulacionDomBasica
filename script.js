/* Podemos seleccionar un elemento del HTML con el tipo de selector
usando la funcion querySelector */

// Selector de etiqueta
/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input')
 */

// Selector de clase
// const parrafito = document.querySelector('.parrafito')
// const parrafito = document.getElementByClassName('.parrafito')

// Selector de ID
// const pid = document.querySelector('#pid')
// const parrafito = document.getElementByClassId('.parrafito')

/* console.log(input.value)

console.log({
    h1,
    p,
    input,
    parrafito,
    pid
});

// Escribiendo HTML desde JavaScript

h1.innerHTML = 'Patito'
p.innerText = 'lorem ipsum <br> jjj </br>'

// Modificar atributos

console.log(h1.getAttribute('class'))
h1.setAttribute('class', 'rojo')

// Añadir atributos al elemento

h1.classList.add('rojo')
h1.classList.remove('rojo')
input.value = '311 847 4651'

// Crear elementos 

const img = document.createElement('img');
img.setAttribute('src','https://static.platzi.com/media/platzi-isotipo@2x.png')
console.log(img);

pid.replaceWith(img) */

const calcType = document.querySelector('.calcType');
const btnSuma = document.getElementById('btn-suma');
const btnResta = document.getElementById('btn-resta');
const btnMultiplicacion = document.getElementById('btn-multiplicacion');
const btnDivision = document.getElementById('btn-division');
const btnModulo = document.getElementById('btn-modulo');
const form = document.querySelector('#form')
const operador = document.querySelector('.operador')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('.result')

/* btnSuma.addEventListener('click', operacion)
btnResta.addEventListener('click', operacion)
btnMultiplicacion.addEventListener('click', operacion)
btnDivision.addEventListener('click', operacion)
btnModulo.addEventListener('click', operacion)
form.addEventListener('submit', calcular) */

let resultado;


function operacion(op)
{
    switch (op)
    {
        case 0:
            calcType.innerText = 'Suma';
            operador.innerText = "+"
            calculo = 0;
        break;
        case 1:
            calcType.innerText = 'Resta';
            operador.innerText = "-"
            calculo = 1;
        break;
        case 2:
            calcType.innerText = 'Multiplicación';
            operador.innerText = "x"
            calculo = 2;
        break;
        case 3:
            calcType.innerText = 'División';
            operador.innerText = "/"
            calculo = 3;
        break;
        case 4:
            calcType.innerText = 'Modulo o Resto';
            operador.innerText= "%"
            calculo = 4;
        break;
    }
    return 0;
}


function calcular()
{
    event.preventDefault();

    let val1 = Number(input1.value)
    let val2 = Number(input2.value)

    
}

function suma ()
{
    resultado = val1 + val2;
    result.innerText = resultado
}
function resta ()
{
    resultado = val1 - val2;
    result.innerText = resultado;
}
function multiplicacion ()
{
    resultado = val1 * val2;
    result.innerText = resultado;
}
function division ()
{
    resultado = val1 * val2
    result.innerText = resultado
}
function modulo ()
{
    resultado = val1 % val2
    result.innerText = resultado
}