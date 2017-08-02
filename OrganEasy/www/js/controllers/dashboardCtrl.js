angular.module('app.controllers')
    .controller('dashboardCtrl', function ($scope, $state, $ionicLoading, MobileFactory, AtividadeService) {
        $scope.atividades = [];
        $scope.atividadesConcluidas = [];
        $scope.$on('$ionicView.enter', function () {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            MobileFactory.listarAtividades(usuario.id).then(function (data) {
                $ionicLoading.hide();
                console.log(data.data);
                $scope.atividades = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
            });

            MobileFactory.listarAtividadesConcluidas(usuario.id).then(function (data) {
                $ionicLoading.hide();
                console.log(data.data);
                $scope.atividadesConcluidas = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
            });
        });

        $scope.visualizar = function (atividade) {
            console.log(atividade);
            AtividadeService.setAtividade(atividade);
            $state.go('menu.visualizarAtividade');
        }

        $scope.exibirIcone = function (atividade) {
            //1 = fora da media
            //2 = media
            //3 = acima da media
            if (atividade.notaObtida != 0) {
                var media = (atividade.notaObtida * 10) / atividade.valor;
                //console.log("Nota diferente de 0: " + media);
                if (media < 5.5) {
                    return 1;
                } else if (media >= 5.5 && media < 6.5) {
                    return 2;
                } else {
                    return 3;
                }
            } else {
                //console.log("Nota igual a 0: " + atividade.notaObtida);
                return 1;
            }
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
