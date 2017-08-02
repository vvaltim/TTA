angular.module('app.controllers')
    .controller('editarAtividadeCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, AtividadeService, MobileFactory) {
        // variaveis utilizadas
        $scope.atividade = [];
        $scope.categorias = [];
        $scope.disciplinas = [];

        $scope.$on('$ionicView.enter', function () {
            $scope.atividade = AtividadeService.getAtividade();

            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            MobileFactory.listarDisciplinas(usuario.id).then(function (data) {
                $scope.disciplinas = data.data;
                MobileFactory.listarCategorias(usuario.id).then(function (data2) {
                    $ionicLoading.hide();
                    $scope.categorias = data2.data;
                }, function (error) {
                    $ionicLoading.hide();
                    console.log(error);
                    $ionicPopup.alert({
                        title: 'Erro!',
                        template: 'Não foi possível exibir as categorias cadastradas. Tente novamente mais tarde.',
                        okType: 'button-assertive'
                    });
                });
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível exibir os professores cadastrados. Tente novamente mais tarde.',
                    okType: 'button-assertive'
                });
            });
        });

        $scope.salvar = function (atividade) {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            atividade.usuario = usuario.id;
            console.log(atividade);
            exibirLoading();
            MobileFactory.editarAtividade(atividade).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $state.go('menu.dashboard');
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível salvar a atividade. Tente novamente mais tarde.',
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
    })
