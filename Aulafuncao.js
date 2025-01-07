/*
function falaOi(){
    console.log('Oi');
}
falaOi();
// é possível salvar funções como variaveis e colocar funções como parametros de outras funções.


const func = function dizerOi(fun){
    fun();
}

func(falaOi);

const arrowf = () => {
    console.log('Função arrow, diferente na palabra this')
}
arrowf();
*/
/*
//Funções de callback
//são usadas para quando não sabemos quanto tempo vai demorar para cada ação acontecer e precisamos fazer o código seguir uma ordem.
//São funções que são iniciadas somente quando uma ação é terminada
function f1(callback){
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    },1500)
   
}
function f2(callback){
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    },1000)
}
function f3(callback){
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    },500)
}

f1(function(){
    f2(function(){
        f3();
    });
});
*/
