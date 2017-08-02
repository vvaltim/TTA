angular.module('app.controllers')
    .controller('detalhamentoDeProfessorCtrl', function ($scope, $ionicPopup, ProfessorFactory, $state) {
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.professor = ProfessorFactory.getProfessor();
        });

        $scope.editar = function(){
            $state.go(menu.editarProfessor);
        }
    })
