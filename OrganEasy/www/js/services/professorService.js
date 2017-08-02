angular.module('app.services')
    .service('ProfessorService', function(){
        var professor = [];
        return {
            getProfessor: function(){
                return professor;
            },
            setProfessor: function(novoProfessor){
                professor = novoProfessor;
            }
        }
    });