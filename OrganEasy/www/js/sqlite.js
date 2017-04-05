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
        }, function (error) {
            console.log('Erro de conexão: ' + error.message);
        }, function () {
            console.log('Tabela criada com sucesso');
        });

        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS professor (id_professor integer primary key, nome_professor text, email_professor text, telefone_professor text, anotacao_professor text)");
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS atividade (id_atividade integer primary key, id_categoria integer, id_disciplina integer, descricao_atividade text, data_atividade text, valor_atividade real, valor_obtido_atividade real, alarme_atividade integer)");
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS disciplina (id_disciplina integer primary key, nome_disciplina text, id_professor integer)");
        //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS categoria (id_categoria integer primary key, nome_categoria text)");
    });
});

sqlite.factory('ProfessorFactory', function ($cordovaSQLite) {
    return {
        insert: function (professor) {
            var query = "INSERT INTO professor (nome_professor, email_professor, telefone_professor, anotacao_professor) VALUES (?, ?, ?, ?)";
            var values = [professor.nome, professor.email, professor.telefone, professor.anotacao];
            console.log(db);
            //abrindo transação com o banco
            db.transaction(function (tx) {
                //tx e a conexão aberta, com ela vc executa as query
                tx.executeSql(query, values);
            }, function (error) {
                //função de error
                console.log('Erro de conexão: ' + error.message);
            }, function () {
                //função de sucess sem retorno, pois so foi inserido
                console.log('Populado com sucesso')
            });
            /*$cordovaSQLite.execute(db, query, values).then(
                function (res) {
                    alert(res.insertId);
                    console.log('INSERTED ID: ' + res.insertId);
                },
                function (err) {
                    alert(res.insertId);
                    console.log('ERROR: ' + err);
                }
            );*/
        },

        selectAll: function () {
            var query = 'SELECT * FROM professor';
            var values = [];
            console.log(db);
            //abrindo transação com o banco
            db.transaction(function (tx) {
                tx.executeSql(query, value, function (tx, rs) {
                    console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
                    console.log(tx);
                    console.log(rs);
                }, function (tx, error) {
                    console.log('SELECT error: ' + error.message);
                });
            });



            // db.transaction(function (tx) {
            //     tx.executeSql(query, values);
            // }, function (error) {
            //     console.log('Erro de conexão: ' + error.message);
            // }, function () {
            //     console.log('Populado com sucesso')
            // });


            // $cordovaSQLite.execute(db, query, []).then(
            //     function (res) {
            //         if (res.rows.length > 0) {
            //             var first = res.rows.item(0);
            //             console.log("Retornando todos os resultados");
            //             console.log(res);
            //         } else {
            //             console.log('Sem professor encontrados');
            //         }
            //     }, function (error) {
            //         console.log("Erro ao buscar registro: " + error);
            //     }
            // );
        },
        select: function (idProfessor) {
            var query = "SELECT * FROM professor WHERE id=?";
            var values = [id];

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
