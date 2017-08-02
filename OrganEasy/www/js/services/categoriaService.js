angular.module('app.services')
    .service('CategoriaService', function(){
        var categoria = [];
        return {
            getCategoria: function(){
                return categoria;
            },
            setCategoria: function(novaCategoria){
                categoria = novaCategoria;
            }
        }
    });