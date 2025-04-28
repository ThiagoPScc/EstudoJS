class Usuario{
	constructor(login, email, senha){
		this.login = login;
		this.email = email;
		this.senha = senha;
	}
	cadastrarUsuario(){
		//chama a função de validarInfomacoes e depois a de cadastrarDAO(passar as informações para o banco de dados).
	}
	validaInformacoes(){
		//ve se o email é real ou não.
		//vê se a senha tem 8 caracteres, sendo 1 deles letra maiuscula, numero e caracter especial.
		//vê se o login tem pelo menos 4 caracteres
	}
	
	trocarSenha(){
		//chama a função de trocar de senha e de procurar e-mail.
	}
	
}

//-------------------------------------------------------------------



class UsuarioDAO{

	 cadastrar(usuario){
		 
	 }
	 excluir(usuario){
		 
	 }
	 
	 
	 validarLoginComBanco(usuario){
		 
	 }
	 trocarSenhaNoBanco(usuario){
		 
	 }
	 
	 buscarItensUsuário(usuario){
		 //busca os item no banco de dados relacionados ao usuario.
	 }
 
}

//-------------------------------------------------------------------

class ItemDaLista{
	constructor(titulo,prioridade,estado){
		this.titulo = titulo;
		this.prioridade = prioridade;
		this.estado = estado;
		this.id = 0;
	}
	criarItem(){
		//pega as informações, valida se não tem nenhum campo vazio e chama a função para enviar o item para o banco de dados;
		
	}
	
	
}
//-------------------------------------------------------------------
class ItemDaListaDAO{
	
	criarItem(itemDaLista){
		
	}
	editarItem(itemDaLista){
		
	}
	excluirItem(itemDaLista){
		
	}
	
}
//-------------------------------------------------------------------
