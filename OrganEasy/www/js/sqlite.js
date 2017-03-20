var db = null;
var sqlite = angular.module('sqlite', ['ionic', 'ngCordova']);

sqlite.run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
        db = $cordovaSQLite.openDB("organeasy.db");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS professor (id_professor integer primary key autoincrement, nome_professor text, email_professor text, telefone_professor text, anotacao_professor text)");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS atividade (id_atividade integer primary key autoincrement, id_categoria integer, id_disciplina integer, descricao_atividade text, data_atividade text, valor_atividade real, valor_obtido_atividade real, alarme_atividade integer)");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS disciplina (id_disciplina integer primary key autoincrement, nome_disciplina text, id_professor integer)");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS categoria (id_categoria integer primary key autoincrement, nome_categoria text)");
    });

    sqlite.factory('chatsFactory', function($cordovaSQLite) {
        return {
            insert : function(firstname, lastname, avatar, message) {
                var query = "INSERT INTO chats (firstname, lastname, avatar, message) VALUES (?, ?, ?, ?);";
                var values = [firstname, lastname, avatar, message];

                $cordovaSQLite.execute(db, query, values).then(
                    function(res) {
                        console.log('INSERTED ID: '+res.insertId);
                    },
                    function(err) {
                        console.log('ERROR: '+err);
                    }
                );
            },
            select : function(id) {
                var query = "SELECT * FROM chats WHERE id=?";
                var values = [id];

                $cordovaSQLite.execute(db, query, values).then(
                    function(res) {
                        if (res.rows.length > 0) {
                            var first = res.rows.item(0);
                            console.log(res.rows.length + ' records, fist: ' + first.firstname + ' ' + first.lastname + ' - ' + first.avatar);
                        } else {
                            console.log('No records found');
                        }
                    }
                );
            }
        }
    });
