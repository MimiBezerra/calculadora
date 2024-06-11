const caixaResultado=document.getElementById("resultado");
function insert(num){
    caixaresultado.innerHTML += num;
   


}

function clean(){
   caixaResultado.innerHTML = "";  
}

function back() {
    let resultadoFinal = caixaresultado.innerHTML;
    caixaResultado.innerHTML =resultadoFinal.substring(0, resultadoFinal.length -1)    
}


function calcular() {
 
    let resultado = caixaResultado.innerHTML;
}
caixaResultado.innerHTML = eval(resultado);