angular.module('app.controllers')
    .controller('editarCategoriaCtrl', function ($scope, $ionicPopup, $state, $ionicLoading, CategoriaService, MobileFactory) {
        $scope.categoria = [];
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.categoria = CategoriaService.getCategoria();
        });

        $scope.salvar = function (categoria) {
            exibirLoading();
            MobileFactory.editarCategoria(categoria).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $state.go('menu.categoria');
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
