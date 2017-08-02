angular.module('app.controllers')
    .controller('cadastroDeProfessorCtrl', function ($scope, $state, $ionicPopup, $ionicLoading, MobileFactory) {
        console.log("Teste cadastroDeProfessorCtrl");

        $scope.salvar = function (professor) {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            professor.idUsuario = usuario.id;
            console.log(professor);

            exibirLoading();
            MobileFactory.cadastrarProfessor(professor).then(function (data) {
                $ionicLoading.hide();
                console.log(data);

                $state.go('menu.professor');
            }, function (error) {
                $ionicLoading.hide();
                console.log(error);
                $ionicPopup.alert({
                    title: 'Erro!',
                    template: 'Não foi possível cadastrar professor. Tente novamente mais tarde.',
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
