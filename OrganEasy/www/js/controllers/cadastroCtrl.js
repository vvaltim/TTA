angular.module('app.controllers')
    .controller('cadastroCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, MobileFactory) {
        $scope.cadastrar = function (usuario) {
            console.log(usuario);
            MobileFactory.cadastrarUsuario(usuario).then(function (data) {
                console.log(data);

                //efetuar login
                efetuarLogin(usuario);
            }, function (error) {
                console.log(error)
            });
        }

        function efetuarLogin(usuario) {
            exibirLoading();
            MobileFactory.efetuarLogin(usuario).then(function (data) {
                $ionicLoading.hide();
                if (data.data.id != null) {
                    window.localStorage.setItem("usuario", JSON.stringify(data.data));
                    $state.go('menu.dashboard');
                } else {
                    $ionicPopup.alert({
                        title: 'Erro!',
                        template: 'Não foi possivel efetuar login. Tente novamente mais tarde.',
                        okType: 'button-royal'
                    });
                    $state.go('login');
                }
            }, function (error) {
                console.log(error);
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível efetuar cadastro. Tente novamente mais tarde.',
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