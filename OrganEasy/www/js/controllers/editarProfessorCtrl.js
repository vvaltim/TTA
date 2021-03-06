angular.module('app.controllers')
    .controller('editarProfessorCtrl', function ($scope, $ionicPopup, $state, $ionicLoading, ProfessorService, MobileFactory) {
        $scope.professor = [];
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            var idProfessorTemp = ProfessorService.getProfessor();
            exibirLoading();
            MobileFactory.listarProfessor(idProfessorTemp).then(function (data) {
                console.log(data.data);
                $ionicLoading.hide();
                $scope.professor = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.data(error);
            });
        });

        $scope.salvar = function (professor) {
            exibirLoading();
            MobileFactory.editarProfessor(professor).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $state.go('menu.professor');
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro',
                    template: 'Não foi possível editar, tente novamente mais tarde.',
                    okType: 'button-assertive',
                });
            });
        }

        function exibirLoading() {
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        }
    })
