angular.module('app.controllers')
    .controller('categoriaCtrl', function ($scope, $state, $ionicPopup, $ionicLoading, MobileFactory, CategoriaService) {
        $scope.categorias = [];
        $scope.$on('$ionicView.enter', function () {
            atualizarCategoria();
        });

        $scope.editar = function (categoria) {
            CategoriaService.setCategoria(categoria);
            $state.go('menu.editarCategoria');
        }

        $scope.excluir = function (categoria) {
            CategoriaService.setCategoria(categoria);
            console.log(categoria);     //professor.id_professor
            var confirmPopup = $ionicPopup.confirm({
                title: 'Excluir Categoria',
                okText: 'Excluir',
                okType: 'button-assertive',
                cancelText: 'Cancelar',
                template: 'Tem certeza que deseja excluir <strong>' + categoria.nome + '</strong>?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('Excluir');
                    MobileFactory.excluirCategoria(categoria.id).then(function (data) {
                        console.log(data);
                        atualizarCategoria();
                    }, function (error) {
                        console.log(error);
                        $ionicPopup.alert({
                            title: 'Erro',
                            template: 'Não foi possível excluir a categoria, tente novamente mais tarde.',
                            okType: 'button-assertive',
                        });
                    });
                }
            });
        }

        function atualizarCategoria() {
            var usuario = JSON.parse(window.localStorage.getItem("usuario"));
            exibirLoading();
            MobileFactory.listarCategorias(usuario.id).then(function (data) {
                $ionicLoading.hide();
                console.log(data);
                $scope.categorias = data.data;
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
