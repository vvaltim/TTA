angular.module('app.controllers')
    .controller('editarProfessorCtrl', function ($scope, $ionicPopup, ProfessorFactory, $state) {
        var idProfessorTemp;
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.professor = ProfessorFactory.getProfessor();
            idProfessorTemp = $scope.professores.id_professor;
            console.log(idProfessorTemp);
        });

        $scope.salvar = function (professor) {
            console.log(professor);
            ProfessorFactory.update(idProfessorTemp, professor);
            $state.go('menu.professor');
        }
    })
