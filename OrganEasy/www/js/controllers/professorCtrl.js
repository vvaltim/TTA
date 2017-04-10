angular.module('app.controllers')
    .controller('professorCtrl', function ($scope, ProfessorFactory, $state) {
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.professores = ProfessorFactory.selectAll();
        });

        $scope.visualizar = function (professor) {
            ProfessorFactory.setProfessor(professor);
            $state.go('menu.detalhamentoDeProfessor');
        }

        $scope.editar = function (id) {
            console.log(id);
        }

        $scope.excluir = function (id) {
            console.log(id);
        }

    })
