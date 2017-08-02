angular.module('app.controllers')
    .controller('editarDisciplinaCtrl', function ($scope, $ionicPopup, $state, $ionicLoading, DisciplinaService, MobileFactory) {
        $scope.disciplina = [];
        $scope.professores = [];
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            $scope.disciplina = DisciplinaService.getDisciplina();
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            MobileFactory.listarProfessores(usuario.id).then(function (data) {
                //console.log(data.data);
                $ionicLoading.hide();
                $scope.professores = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.data(error);
            });
        });

        $scope.salvar = function (disciplina) {
            disciplina.professor = parseInt(disciplina.professor);
            console.log(disciplina);
            exibirLoading();
            MobileFactory.editarDisciplina(disciplina).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $state.go('menu.disciplina');
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
