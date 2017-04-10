angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
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
        url: '/page5',
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

    .state('menu.cadastroDeAtividade', {
        url: '/registerActivity',
        views: {
            'side-menu21': {
                templateUrl: 'templates/cadastroDeAtividade.html',
                controller: 'cadastroDeAtividadeCtrl'
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

    .state('menu.disciplina', {
        url: '/disciplina',
        views: {
            'side-menu21': {
                templateUrl: 'templates/disciplina.html',
                controller: 'disciplinaCtrl'
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

    $urlRouterProvider.otherwise('/side-menu21/dashboard')
});
