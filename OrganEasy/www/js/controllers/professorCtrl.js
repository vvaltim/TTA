angular.module('app.controllers')
    .controller('professorCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, MobileFactory, ProfessorService) {
        $scope.professores = [];

        $scope.$on('$ionicView.enter', function () {
            atualizarProfessores();
        });

        $scope.visualizar = function (professor) {
            ProfessorService.setProfessor(professor);
            $state.go('menu.detalhamentoDeProfessor');
        }

        $scope.editar = function (professor) {
            console.log(professor.id);
            ProfessorService.setProfessor(professor.id);
            $state.go('menu.editarProfessor');
        }

        $scope.excluir = function (professor) {
            console.log(professor);     //professor.id_professor
            var confirmPopup = $ionicPopup.confirm({
                title: 'Excluir Professor',
                okText: 'Excluir',
                okType: 'button-assertive',
                cancelText: 'Cancelar',
                template: 'Tem certeza que deseja excluir <strong>' + professor.nome + '</strong>?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('Excluir');
                    MobileFactory.excluirProfessor(professor.id).then(function (data) {
                        console.log(data);
                        atualizarProfessores();
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

        function exibirLoading() {
            $ionicLoading.show({
                content: 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
            });
        }

        function atualizarProfessores(){
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            MobileFactory.listarProfessores(usuario.id).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.professores = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
            });
        }
    })
