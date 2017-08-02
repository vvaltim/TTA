angular.module('app.controllers')
    .controller('visualizarAtividadeCtrl', function ($scope, $state, $ionicPopup, $ionicLoading, $timeout, AtividadeService, MobileFactory) {
        $scope.atividade = [];

        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.atividade = AtividadeService.getAtividade();
        });

        $scope.editar = function () {
            AtividadeService.setAtividade($scope.atividade);
            $state.go('menu.editarAtividade');
        }

        $scope.excluir = function () {
            console.log($scope.atividade);     //professor.id_professor
            var confirmPopup = $ionicPopup.confirm({
                title: 'Excluir Atividade',
                okText: 'Excluir',
                okType: 'button-assertive',
                cancelText: 'Cancelar',
                template: 'Tem certeza que deseja excluir <strong>' + $scope.atividade.descricao + '</strong>?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('Excluir');
                    MobileFactory.excluirAtividade($scope.atividade.id).then(function (data) {
                        console.log(data);
                        $state.go('menu.dashboard');
                    }, function (error) {
                        console.log(error);
                        $ionicPopup.alert({
                            title: 'Erro',
                            template: 'Não foi possível excluir o professor, tente novamente mais tarde.',
                            okType: 'button-assertive',
                        });
                    });
                }
            });
        }

        $scope.alterarNota = function () {
            $scope.data = {};

            $ionicPopup.show({
                template: '<input type="number" ng-model="data.wifi">',
                title: 'Nota da atividade',
                subTitle: 'Insira a nota obtida na atividade',
                scope: $scope,
                buttons: [
                    { text: 'Cancelar' },
                    {
                        text: '<b>Salvar</b>',
                        type: 'button-royal',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                //e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            }).then(function (res) {
                console.log('Tapped!', res);
                exibirLoading();
                var notaObtida = parseInt(res);
                MobileFactory.inserirNota($scope.atividade.id, notaObtida).then(function (data) {
                    $ionicLoading.hide();
                    console.log(data.data);
                    $state.go('menu.dashboard');
                }, function (error) {
                    $ionicLoading.hide();
                    console.log(error);
                });
            });
        }

        $scope.exibirNotaObtida = function (nota) {
            if (nota == 0) {
                return false;
            } else {
                return true;
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
