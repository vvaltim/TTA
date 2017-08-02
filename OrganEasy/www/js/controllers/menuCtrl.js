angular.module('app.controllers')
.controller('menuCtrl', function($scope, $state){
    $scope.sair = function(){
        window.localStorage.removeItem("usuario");
        $state.go('login');
    }
})
