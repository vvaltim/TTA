angular.module('app.controllers')
    .controller('cadastroDeCategoriaCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, MobileFactory) {
        $scope.salvar = function (categoria) {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            categoria.usuario = usuario.id;
            console.log(categoria);
            exibirLoading();
            MobileFactory.salvarCategoria(categoria).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $state.go('menu.categoria');
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível cadastrar a categoria. Tente novamente mais tarde.',
                    okType: 'button-assertive'
                });
            })
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
