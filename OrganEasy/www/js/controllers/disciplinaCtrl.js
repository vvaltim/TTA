angular.module('app.controllers')
    .controller('disciplinaCtrl', function ($scope, $state, $ionicPopup, $ionicLoading, MobileFactory, DisciplinaService) {
        $scope.disciplinas = [];
        $scope.$on('$ionicView.enter', function () {
            atualizarDisciplinas();
        });

        $scope.cadastrar = function () {
            $state.go('menu.cadastroDeDisciplina');
        }

        $scope.editar = function (disciplina) {
            DisciplinaService.setDisciplina(disciplina);
            $state.go('menu.editarDisciplina');
        }

        $scope.visualizar = function (disciplina) {
            DisciplinaService.setDisciplina(disciplina);
            $state.go('menu.visualizarDisciplina');
        }

        $scope.excluir = function (disciplina) {
            //console.log(professor);
            var confirmPopup = $ionicPopup.confirm({
                title: 'Excluir Disciplina',
                okText: 'Excluir',
                okType: 'button-assertive',
                cancelText: 'Cancelar',
                template: 'Tem certeza que deseja excluir <strong>' + disciplina.nome + '</strong>?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    //console.log('Excluir');
                    MobileFactory.excluirDisciplina(disciplina.id).then(function (data) {
                        console.log(data);
                        atualizarDisciplinas();
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

        function atualizarDisciplinas() {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            MobileFactory.listarDisciplinas(usuario.id).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.disciplinas = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
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
