var db = null;
var sqlite = angular.module('sqlite', ['ionic', 'ngCordova']);

//documentação do sqlite
// https://github.com/litehelpers/Cordova-sqlite-storage

sqlite.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        //alert("Db criado com sucesso.");
        //criando o banco
        db = window.sqlitePlugin.openDatabase({ name: 'organeasy.db', location: 'default' });

        //abrindo conexão com o banco de dados
        db.transaction(function (tx) {
            //criando as tabelas
            tx.executeSql('CREATE TABLE IF NOT EXISTS professor (id_professor integer primary key AUTOINCREMENT, nome_professor text, email_professor text, telefone_professor text, anotacao_professor text)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS disciplina (id_disciplina integer primary key AUTOINCREMENT, nome_disciplina text, id_professor integer)');
        }, function (error) {
            console.log('Erro de conexão: ' + error.message);
        }, function () {
            //console.log('Tabela criada com sucesso');
        });

        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS professor (id_professor integer primary key, nome_professor text, email_professor text, telefone_professor text, anotacao_professor text)");
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS atividade (id_atividade integer primary key, id_categoria integer, id_disciplina integer, descricao_atividade text, data_atividade text, valor_atividade real, valor_obtido_atividade real, alarme_atividade integer)");
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS disciplina (id_disciplina integer primary key, nome_disciplina text, id_professor integer)");
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS categoria (id_categoria integer primary key, nome_categoria text)");
    });
});

sqlite.factory('ProfessorFactory', function ($cordovaSQLite, $ionicPopup) {
    return {
        insert: function (professor) {
            var query = "INSERT INTO professor (nome_professor, email_professor, telefone_professor, anotacao_professor) VALUES (?, ?, ?, ?)";
            var values = [professor.nome, professor.email, professor.telefone, professor.anotacao];
            //console.log(db);
            //abrindo transação com o banco
            db.transaction(function (tx) {
                //tx e a conexão aberta, com ela vc executa as query
                tx.executeSql(query, values);
            }, function (error) {
                //função de error
                $ionicPopup.alert({
                    title: 'Erro',
                    template: 'Não e possível salvar!',
                    type: 'button-assertive'
                });
                console.log('Erro de conexão: ' + error.message);
            }, function () {
                //função de sucess sem retorno, pois so foi inserido
                $ionicPopup.alert({
                    title: 'Sucesso',
                    template: 'Registro salvo com sucesso!',
                    type: 'button-balanced'
                });
                //console.log('Populado com sucesso')
            });
        },
        selectAll: function () {
            //abrindo transação com o banco
            var resultadoProfessor = [];
            db.executeSql('SELECT * FROM professor', [], function (resultSet) {
                console.log("Resultado da query");
                var qnt = resultSet.rows.length;

                for (var i = 0; i < qnt; i++) {
                    //console.log(resultSet.rows.item(i));
                    resultadoProfessor.push(resultSet.rows.item(i));
                }
                //console.log(resultadoProfessor);

            }, function (tx, error) {
                //console.log('SELECT error: ' + error.message);
            });
            return resultadoProfessor;
        },
        update: function (idProfessor, novoProfessor) {
            var query = "UPDATE professor SET nome_professor = ?, email_professor = ?, telefone_professor = ?, anotacao_professor = ? WHERE id_professor = ?";
            var values = [novoProfessor.nome_professor, novoProfessor.email_professor, novoProfessor.telefone_professor, novoProfessor.anotacao_professor, idProfessor];

            $cordovaSQLite.execute(db, query, values).then(
                function (res) {
                    if (res.rows.length > 0) {
                        var first = res.rows.item(0);
                        console.log("Retornando resultado específico");
                        console.log(res);
                    } else {
                        console.log('Sem professor encontrados');
                    }
                }, function (error) {
                    console.log("Erro ao buscar registro: " + error);
                }
            );
        }
    }
});

sqlite.factory('DisciplinaFactory', function ($cordovaSQLite, $ionicPopup) {
    return {
        insert: function (disciplina) {
            var query = "INSERT INTO disciplina (nome_disciplina, id_disciplina) VALUES (?, ?)";
            var values = [disciplina.nome, disciplina.idDisciplina];
            //console.log(db);
            //abrindo transação com o banco
            db.transaction(function (tx) {
                //tx e a conexão aberta, com ela vc executa as query
                tx.executeSql(query, values);
            }, function (error) {
                //função de error
                $ionicPopup.alert({
                    title: 'Erro',
                    template: 'Não e possível salvar!',
                    type: 'button-assertive'
                });
                console.log('Erro de conexão: ' + error.message);
            }, function () {
                //função de sucess sem retorno, pois so foi inserido
                $ionicPopup.alert({
                    title: 'Sucesso',
                    template: 'Registro salvo com sucesso!',
                    type: 'button-balanced'
                });
                //console.log('Populado com sucesso')
            });
        },
        selectAll: function () {
            //abrindo transação com o banco
            var resultadoCategoria = [];
            db.executeSql('SELECT * FROM categoria', [], function (resultSet) {
                console.log("Resultado da query");
                var qnt = resultSet.rows.length;

                for (var i = 0; i < qnt; i++) {
                    //console.log(resultSet.rows.item(i));
                    resultadoCategoria.push(resultSet.rows.item(i));
                }
                //console.log(resultadoProfessor);

            }, function (tx, error) {
                //console.log('SELECT error: ' + error.message);
            });
            return resultadoCategoria;
        },
        update: function (idProfessor, novoProfessor) {
            var query = "UPDATE professor SET nome_professor = ?, email_professor = ?, telefone_professor = ?, anotacao_professor = ? WHERE id_professor = ?";
            var values = [novoProfessor.nome_professor, novoProfessor.email_professor, novoProfessor.telefone_professor, novoProfessor.anotacao_professor, idProfessor];

            $cordovaSQLite.execute(db, query, values).then(
                function (res) {
                    if (res.rows.length > 0) {
                        var first = res.rows.item(0);
                        console.log("Retornando resultado específico");
                        console.log(res);
                    } else {
                        console.log('Sem professor encontrados');
                    }
                }, function (error) {
                    console.log("Erro ao buscar registro: " + error);
                }
            );
        }
    }
});