angular.module('app.controllers')
    .controller('cadastroDeDisciplinasCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, MobileFactory) {
        // variaveis utilizadas
        $scope.professores = [];

        $scope.$on('$ionicView.enter', function () {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            $scope.professores = MobileFactory.listarProfessores(usuario.id).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.professores = data.data;

            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível cadastrar disciplina. Tente novamente mais tarde.',
                    okType: 'button-assertive'
                });
            });
        });

        $scope.salvar = function (disciplina) {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            disciplina.usuario = usuario.id;
            console.log(disciplina);
            exibirLoading();
            MobileFactory.cadastrarDisciplina(disciplina).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $state.go('menu.disciplina');
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível salvar disciplina. Tente novamente mais tarde.',
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
