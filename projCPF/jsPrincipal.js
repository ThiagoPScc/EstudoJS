// 705.484.450-52  070.987.720-03
class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            writable:false,
            enumerable:true,
            configurable:false,
            value:cpfEnviado.replace(/\D+/g,'')
        });

    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos +digito1 +digito2;
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.lenght + 1;

        for(let numTamStr of cpfSemDigitos){
            total+= reverso * Number(numTamStr);
            reverso--;
        }
        const digito = 11 -(total%11);
        return difito <= 9 ? String(digito) :'0'

    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.lenght !== 11) return false;
        this.geraNovoCpf();
        console.log(this.novoCpf);

        return this.novoCpf === this.cpfLimpo;

    }
}
const valida1 = new ValidaCPF('070.987.720-03');

if(valida1.valida()){
    console.log('CPF válido');
}else{
    console.log('CPF inválido');
}