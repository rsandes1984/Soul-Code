function adicionar(valor) {
    document.getElementById('visor').value += valor;
}


function limpar() {
    document.getElementById('visor').value = '';
}


function apagar() {
    var visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    var visor = document.getElementById('visor');
    try {
       
        visor.value = eval(visor.value);
    } catch (error) {
      
        visor.value = 'Erro';
    }
}