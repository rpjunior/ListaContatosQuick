angular.module('appQuickfast',[])

.filter('orderBySemAcentosNome',function(){
    return function (dados) {
        dados.sort(function (x, y) {
            return x.nome.localeCompare(y.nome);
        });
        return dados;
      }; 
})

.controller('MasterCtrl',['$rootScope', '$scope', function($rootScope, $scope) {
	$rootScope.contatoSelecionado = {
		nome: '',
		sobrenome: '',
		telefone: '',
		celular: '',
		email: ''
	};
	
	$rootScope.contatoSelecionadoModel = function () {
		return {
			nome: '',
			sobrenome: '',
			telefone: '',
			celular: '',
			email: ''
		};
	};
	
	$rootScope.listaContatos = [
		{nome: "Álberto", sobrenome: "Ferreira", telefone: "(11) 99983-1231", celular: "(44) 3032-1122", email: "alberto@gmail.com"},
		{nome: "João", sobrenome: "Almeida", telefone: "(44) 3032-1122", celular: "", email: "joao@gmail.com"},
		{nome: "Carlos", sobrenome: "Martins", telefone: "(91) 98873-2323", celular: "(91) 98873-2323", email: "carlos@gmail.com"},
		{nome: "Zureide", sobrenome: "Pereira", telefone: "(25) 7333-2212", celular: "", email: "zureide@gmail.com"},
		{nome: "Maria", sobrenome: "Marta Filha", telefone: "(11) 7878-4311", celular: "(11) 7878-4311", email: "maria@gmail.com"},
		{nome: "Ana", sobrenome: "Andrade", telefone: "(67) 99228-4122", celular: "(67) 99228-4122", email: "ana@gmail.com"}
	];
	
	$scope.selecionarCOntato = function (contato) {
		$rootScope.contatoSelecionado = contato;
	};
	
	$rootScope.estados = {
		editar: false,
		novo: false
	};
	
	$rootScope.criarContato = function () {
		$rootScope.estados.novo = true;
		$rootScope.contatoSelecionado = $rootScope.contatoSelecionadoModel();
	};
	
	$rootScope.excluirContato = function () {
		if($rootScope.contatoSelecionado.nome != "") {
			$rootScope.listaContatos.splice($rootScope.listaContatos.indexOf($rootScope.contatoSelecionado), 1);
			$rootScope.contatoSelecionado = $rootScope.contatoSelecionadoModel();
		}
	};
}])

.controller('ListaContatosCtrl',['$rootScope', '$scope', function($rootScope, $scope) {
	$scope.init = function () {
	};
}])

.controller('DetalhesContatoCtrl',['$rootScope', '$scope', function($rootScope, $scope) {
	
	$scope.init = function () {

	};
	
	$scope.editarContato = function () {
		$rootScope.estados.editar = true;
	}
	
	$scope.salvarContato = function (formulario) {
		if(formulario.$invalid) {
			alert("Nome e/ou Sobrenome faltando!")
		} else {
			$rootScope.estados.editar = false;
			$rootScope.estados.novo = false;
			if($rootScope.listaContatos.indexOf($rootScope.contatoSelecionado) == -1) {
				$rootScope.listaContatos.push($rootScope.contatoSelecionado)
			}
		}
	};
}]);

