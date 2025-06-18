let contador = 0;

const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');
const valorContador = document.getElementById ('valor-contador');
const botonReset = document.getElementById ('reset');



botonDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorContador.textContent = contador;
    }
});

botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

botonReset.addEventListener('click', () => {
    contador = 0;
    valorContador.textContent = contador;
});



const dios = ("Todo lo que me proponga lo voy a lograr a la mano de Dios... Amen")

alert(dios)