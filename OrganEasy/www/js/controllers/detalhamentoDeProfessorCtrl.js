angular.module('app.controllers')
    .controller('detalhamentoDeProfessorCtrl', function ($scope, $ionicPopup, ProfessorFactory, $state) {
        console.log("Teste detalhamentoDeProfessorCtrl");
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.professor = ProfessorFactory.getProfessor();
            console.log($scope.professor);
        });
    })
