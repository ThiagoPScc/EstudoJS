class construcoes {
	constructor (){
		this.custoMad = 0;
		this.custoMan = 0;
		this.custoCom = 0;
		this.custoPed = 0;
		this.nome = "vazio";
		this.tipo = "vazio";
		this.nivel = 0;
	}
	
	construir(){
		//criar construção no local da matriz
	}
	
	demolir(){
		//devolver metade dos recursos gastados e excluir construção no local da matriz
		
	}
	
	subirDeNivel(){
		//aumentar atributos
		
		
	}
}
class Passivas extends construcoes{
	constructor(){
		this.gerarMad = 0;
		this.gerarMan = 0;
		this.gerarCom = 0;
		this.gerarPed = 0;
	}
	gerarRecurso(){
		//gerar recursos
		
	}
	
}

class Torres extends construcoes{
	constructor(){
		this.dano = 0;
		this.areaDano = 0;
		this.alcance = 0;
		this.cooldown = 0;
	}
	atirar(){
		//gerar recursos
		
	}
}

class Guardas extends construcoes{
	constructor(){
		this.danoGuardas = 0;
		this.guardasAtuais = 0;
		this.guartasTotal = 0;
		this.cooldown = 0;
		this.vidaMaxima = 0;
	}
	gerarGuardas(){
		//caso a quantidade de guardas atual seja diferente da quantidade total, gera guardas até a quantidade total.
		
	}
	
	curarGuardas(){
		//a cada 30 segs recupera a vida dos guardas em 20% da vida maxima caso não estejam com a vida maxima.
	}
}
