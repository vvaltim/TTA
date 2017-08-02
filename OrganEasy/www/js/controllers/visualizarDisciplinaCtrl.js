angular.module('app.controllers')
    .controller('visualizarDisciplinaCtrl', function ($scope, $state, DisciplinaService) {
        $scope.disciplina = [];
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.disciplina = DisciplinaService.getDisciplina();
            //console.log($scope.disciplina);
        });
    })
