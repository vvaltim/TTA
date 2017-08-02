angular.module('app.controllers')
    .controller('loginCtrl', function ($scope, $state, $ionicPopup, $ionicLoading, MobileFactory) {
        // variaveis utilizadas
        var usuario = JSON.parse(window.localStorage.getItem("usuario"));
        if (usuario != null) {
            exibirLoading();
            MobileFactory.efetuarAutoLogin(usuario).then(function (data) {
                $ionicLoading.hide();
                if (data.data.id != null) {
                    $state.go('menu.dashboard');
                }
            }, function (error) {
                console.log(error);
                $ionicLoading.hide();
            });
        }

        $scope.cadastrar = function () {
            $state.go('cadastro');
        }

        $scope.logar = function (usuario) {
            console.log(usuario);
            MobileFactory.efetuarLogin(usuario).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                if (data.data.id != null) {
                    window.localStorage.setItem("usuario", JSON.stringify(data.data));
                    $state.go('menu.dashboard');
                } else {
                    $ionicPopup.alert({
                        title: 'Erro!',
                        template: 'Usuario ou senha incorretos.',
                        okType: 'button-royal'
                    });
                }
            }, function (error) {
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível efetuar login. Tente novamente mais tarde.',
                    okType: 'button-assertive'
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
    });