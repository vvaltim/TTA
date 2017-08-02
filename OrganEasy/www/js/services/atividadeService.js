angular.module('app.services')
    .service('AtividadeService', function(){
        var atividade = [];
        return {
            getAtividade: function(){
                return atividade;
            },
            setAtividade: function(novaAtividade){
                atividade = novaAtividade;
            }
        }
    });