angular.module('app.controllers')
    .controller('cadastroDeProfessorCtrl', function ($scope, $ionicPopup, ProfessorFactory, $state) {
        console.log("Teste cadastroDeProfessorCtrl");

        $scope.salvar = function (professor) {
            console.log(professor);
            ProfessorFactory.insert(professor);
            $state.go('menu.professor');
        }
    })
