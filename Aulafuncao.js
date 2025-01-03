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