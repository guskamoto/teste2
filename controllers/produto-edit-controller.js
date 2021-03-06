app.controller("produtoEditController",produtoEditController);

function produtoEditController(produtoService,$scope,$location,$routeParams){
  var codigo = $routeParams.code;
  $scope.produto = {};

  function getByCode(codigo){
    $scope.produto = produtoService.getByCode(codigo);
  }

  function salvar(produto){
    if(parseInt(produto.codigo)){
      produtoService.salvarEditar(produto);
      $location.path('produto');
    }else {
      alert("O campo CÓDIGO só aceita números!");
    }
  }

  getByCode(codigo);
  $scope.salvar = salvar;
}
