angular.module('app.services')
    .factory('MobileFactory', function ($http, $q) {
        var url = 'http://192.168.43.55:8080/OrganEasy/webresources/';
        return {
            cadastrarUsuario: function (usuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'usuario/cadastro',
                    data: {
                        'email': usuario.email,
                        'senha': usuario.senha
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            efetuarLogin: function (usuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'usuario/login',
                    data: {
                        'email': usuario.email,
                        'senha': usuario.senha
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            efetuarAutoLogin: function (usuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'usuario/autologin',
                    data: {
                        'email': usuario.email,
                        'senha': usuario.senha
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            cadastrarProfessor: function (professor) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'professor/cadastro',
                    data: {
                        'nome': professor.nome,
                        'email': professor.email,
                        'telefone': professor.telefone,
                        'anotacao': professor.anotacao,
                        'usuario': {
                            'id': professor.idUsuario
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarProfessores: function (idUsuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'professor/listar/' + idUsuario,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarProfessor: function (idProfessor) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'professor/listarEspecifico/' + idProfessor,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            editarProfessor: function (professor) {
                var deferred = $q.defer();
                return $http({
                    method: 'PUT',
                    url: url + 'professor/editar',
                    data: {
                        'anotacao': professor.anotacao,
                        'telefone': professor.telefone,
                        'email': professor.email,
                        'nome': professor.nome,
                        'id': professor.id,
                        'usuario': {
                            'id': professor.usuario.id
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            excluirProfessor: function (idProfessor) {
                var deferred = $q.defer();
                return $http({
                    method: 'DELETE',
                    url: url + 'professor/excluir/' + idProfessor,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            cadastrarDisciplina: function (disciplina) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'disciplina/cadastro',
                    data: {
                        'nome': disciplina.nome,
                        'professor': {
                            'id': disciplina.professor
                        },
                        'usuario': {
                            'id': disciplina.usuario
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarDisciplinas: function (idUsuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'disciplina/listar/' + idUsuario,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarDisciplina: function (idDisciplina) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'disciplina/listarEspecifico/' + idDisciplina,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            editarDisciplina: function (disciplina) {
                var usuario = JSON.parse(window.localStorage.getItem("usuario"));
                var deferred = $q.defer();
                return $http({
                    method: 'PUT',
                    url: url + 'disciplina/editar',
                    data: {
                        'nome': disciplina.nome,
                        'id': disciplina.id,
                        'usuario': {
                            'id': usuario.id
                        },
                        'professor': {
                            'id': disciplina.professor
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            excluirDisciplina: function (idDisciplina) {
                var deferred = $q.defer();
                return $http({
                    method: 'DELETE',
                    url: url + 'disciplina/excluir/' + idDisciplina,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            salvarCategoria: function (categoria) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'categoria/cadastro',
                    data: {
                        'nome': categoria.nome,
                        'usuario': {
                            'id': categoria.usuario
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarCategorias: function (idUsuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'categoria/listar/' + idUsuario,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            editarCategoria: function (categoria) {
                var usuario = JSON.parse(window.localStorage.getItem("usuario"));
                var deferred = $q.defer();
                return $http({
                    method: 'PUT',
                    url: url + 'categoria/editar',
                    data: {
                        'nome': categoria.nome,
                        'id': categoria.id,
                        'usuario': {
                            'id': usuario.id
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            excluirCategoria: function (idCategoria) {
                var deferred = $q.defer();
                return $http({
                    method: 'DELETE',
                    url: url + 'categoria/excluir/' + idCategoria,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            salvarAtividade: function (atividade) {
                var deferred = $q.defer();
                return $http({
                    method: 'POST',
                    url: url + 'atividade/cadastro',
                    data: {
                        'usuario': {
                            'id': atividade.usuario
                        },
                        'categoria': {
                            'id': atividade.categoria
                        },
                        'disciplina': {
                            'id': atividade.disciplina
                        },
                        'descricao': atividade.descricao,
                        'data': atividade.data,
                        'valor': atividade.valor,
                        'alarme': atividade.alarme
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarAtividades: function (idUsuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'atividade/listar/' + idUsuario,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            listarAtividadesConcluidas: function (idUsuario) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'atividade/listarconcluido/' + idUsuario,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            editarAtividade: function (atividade) {
                var deferred = $q.defer();
                return $http({
                    method: 'PUT',
                    url: url + 'atividade/editar',
                    data: {
                        'id': atividade.id,
                        'usuario': {
                            'id': atividade.usuario
                        },
                        'categoria': {
                            'id': atividade.categoria
                        },
                        'disciplina': {
                            'id': atividade.disciplina
                        },
                        'descricao': atividade.descricao,
                        'data': atividade.data,
                        'valor': atividade.valor,
                        'alarme': atividade.alarme
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            excluirAtividade: function (idAtividade) {
                var deferred = $q.defer();
                return $http({
                    method: 'DELETE',
                    url: url + 'atividade/excluir/' + idAtividade,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            },
            inserirNota: function (idAtividade, nota) {
                var deferred = $q.defer();
                return $http({
                    method: 'GET',
                    url: url + 'atividade/inserirNota/' + idAtividade + '/' + nota,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
        }
    });
