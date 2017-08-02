angular.module('app.services')
    .service('DisciplinaService', function(){
        var disciplina = [];
        return {
            getDisciplina: function(){
                return disciplina;
            },
            setDisciplina: function(novaDisciplina){
                disciplina = novaDisciplina;
            }
        }
    });