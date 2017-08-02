angular.module('app.controllers')
    .controller('visualizarProfessorCtrl', function ($scope, $ionicPopup, $state, $ionicLoading, ProfessorService, MobileFactory) {
        $scope.professor = [];
        $scope.$on('$ionicView.enter', function () {
            //chamar o evento toda vez que entra na view
            var idProfessorTemp = ProfessorService.getProfessor();
            exibirLoading();
            MobileFactory.listarProfessor(idProfessorTemp).then(function (data) {
                console.log(data.data);
                $ionicLoading.hide();
                $scope.professor = data.data;
            }, function (error) {
                $ionicLoading.hide();
                console.data(error);
            });
        });
        
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
