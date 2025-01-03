/*
console.log('Hello word');
let val1 = 10;
let val2 = 15;
function somaDeDoisValores(a,b){
   console.log(a+b);
}
somaDeDoisValores(val1,val2);

function Saudar(nome){
    console.log(`Bom dia ${nome}`)
}

Saudar('Paulo');

// objetos

function criaPessoa(nome,idade,id){
    return {
        nome: nome,
        idade:idade,
        //podemos só usar o nome da variavel com virgula caso o argumento vá ter o mesmo nome que a variavel no obj
        id,
    };
    
}

const pessoa1 = criaPessoa('carlos',25,1);
const pessoa2 = criaPessoa('Julio',42,2);
const pessoa3 = criaPessoa('Paulo',65,3);
const pessoa4 = criaPessoa('Thiago',25,4);

console.log(pessoa1,pessoa2,pessoa3,pessoa4);

const data = new Date();
console.log('dia',data.getDate())
console.log('dia',data.getMonth()+1)//começa do 0
console.log('dia',data.getFullYear())
console.log('dia',data.getDay())//0 domingo 6 é sabado
console.log('dia',data.getHours())
console.log(data);

//operação ternária são operações de if else que podem ser feitas em uma unica linha.

let teste = 10;

console.log(teste == 10 ? 'igual' : 'falso');
console.log(teste == 15 ? 'igual' : 'falso'); 

const numeros =  [1,2,3,4,5,6,7]
const numeroSeparado = [num1,num2, ,num4,  ... resto] = numeros;
console.log(num1,num2,num4);
console.log(resto);
//                    0       1       2
//                  0 1 2   0 1 2   0 1 2
const listaDois = [[1,2,3],[4,5,6],[7,8,9]]; 
const pessoa = {
    nome:'luiz',
    rg:289632,
    idade:30,
    endereço:{
        rua:'ruapogers',
        numero:289,
    }

}

const {nome,idade, endereço:{rua}} =  pessoa;
console.log(nome,idade,rua, endereço);

function mostraHora(){
    let data = new Date();
 
    return data.toLocaleDateString('pt-BR',{
        hour12: false
    });
}
/*
function funcaDoInterval(){
    console.log(mostraHora());
}*/

//setInterval(funcaDoInterval, 1000);

//setInterval(function(){console.log(mostraHora())}, 1000);//Aqui estamos criando uma função dentro do parametro da função setInterval.
/*
let valo = false;
console.log(valo);

function mudaValo(){
    valo = true;
    console.log(valo);
}

setTimeout(mudaValo,10000);*/
