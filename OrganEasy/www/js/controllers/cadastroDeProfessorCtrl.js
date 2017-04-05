angular.module('app.controllers')
    .controller('cadastroDeProfessorCtrl', function ($scope, $ionicPopup, ProfessorFactory) {
        console.log("Teste cadastroDeProfessorCtrl");

        $scope.salvar = function (professor) {
            console.log(professor);
            ProfessorFactory.insert(professor);
            $ionicPopup.alert({
                title: 'Sucesso',
                template: 'Registro salvo com sucesso!',
                type: 'button-balanced'
            });
        }

        $scope.mostrar = function(){
            ProfessorFactory.selectAll();
        }
    })
