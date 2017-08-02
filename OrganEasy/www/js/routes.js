angular.module('app.routes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            })

            .state('menu.dashboard', {
                url: '/dashboard',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/dashboard.html',
                        controller: 'dashboardCtrl'
                    }
                }
            })

            .state('menu.cadastroDeDisciplina', {
                url: '/registerDiscipline',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/cadastroDeDisciplinas.html',
                        controller: 'cadastroDeDisciplinasCtrl'
                    }
                }
            })

            .state('menu.cadastroDeCategoria', {
                url: '/regiserCategory',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/cadastroDeCategoria.html',
                        controller: 'cadastroDeCategoriaCtrl'
                    }
                }
            })

            .state('menu.editarCategoria', {
                url: '/editCategory',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/editarCategoria.html',
                        controller: 'editarCategoriaCtrl'
                    }
                }
            })

            .state('menu.cadastroDeAtividade', {
                url: '/registerActivity',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/cadastroDeAtividade.html',
                        controller: 'cadastroDeAtividadeCtrl'
                    }
                }
            })

            .state('menu.editarAtividade', {
                url: '/editActivity',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/editarAtividade.html',
                        controller: 'editarAtividadeCtrl'
                    }
                }
            })

            .state('menu.cadastroDeProfessor', {
                url: '/registerTeacher',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/cadastroDeProfessor.html',
                        controller: 'cadastroDeProfessorCtrl'
                    }
                }
            })

            .state('menu.detalhamentoDeProfessor', {
                url: '/viewTeacher',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/detalhamentoDeProfessor.html',
                        controller: 'detalhamentoDeProfessorCtrl'
                    }
                }
            })

            .state('menu.editarProfessor', {
                url: '/editTeacher',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/editarProfessor.html',
                        controller: 'editarProfessorCtrl'
                    }
                }
            })

            .state('menu.visualizarProfessor', {
                url: '/visualizarProfessor',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/visualizarProfessor.html',
                        controller: 'visualizarProfessorCtrl'
                    }
                }
            })

            .state('menu.disciplina', {
                url: '/disciplina',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/disciplina.html',
                        controller: 'disciplinaCtrl'
                    }
                }
            })

            .state('menu.editarDisciplina', {
                url: '/editDiscipline',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/editarDisciplina.html',
                        controller: 'editarDisciplinaCtrl'
                    }
                }
            })

            .state('menu.visualizarDisciplina', {
                url: '/visualizarDisciplina',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/visualizarDisciplina.html',
                        controller: 'visualizarDisciplinaCtrl'
                    }
                }
            })

            .state('menu.categoria', {
                url: '/categoria',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/categoria.html',
                        controller: 'categoriaCtrl'
                    }
                }
            })

            .state('menu.visualizarAtividade', {
                url: '/visualizarAtividade',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/visualizarAtividade.html',
                        controller: 'visualizarAtividadeCtrl'
                    }
                }
            })

            .state('menu.professor', {
                url: '/professor',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/professor.html',
                        controller: 'professorCtrl'
                    }
                }
            })

            .state('menu', {
                url: '/side-menu21',
                cache: false,
                templateUrl: 'templates/menu.html',
                controller: 'menuCtrl'
            })

            .state('cadastro', {
                url: '/cadastro',
                cache: false,
                templateUrl: 'templates/cadastro.html',
                controller: 'cadastroCtrl'
            })

        $urlRouterProvider.otherwise('/login')
    });
