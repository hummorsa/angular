
var module = angular.module('curso',[]);



module.controller('twoWayBindController',function($scope,userFactory){
    $scope.variableBind = "Mundo";
    $scope.user = {};
    $scope.userList = userFactory.listContacts();

    $scope.paintJason = function(){
       alert(JSON.stringify($scope.user));
    };

    $scope.safeUser = function(){
        userFactory.safecontact($scope.user);
        $scope.user = {};
    };


    $scope.writemarkup = function(){

        //var welcomeMsg= $('<div><span>User information:</span><ul><li>{{usuario.nombre}}</li><li></li><<li></li>/ul></div>');
        return $scope.usuario;
        //return welcomeMsg;
    };


    $scope.removeUser =function(index){
        userFactory.removeContat(index);

    }

});



module.factory('userFactory',function(){
    var userList = [];

    return{
        safecontact: function(user){
            userList.push(user);
            console.log(userList);
        },

        listContacts: function(){
            return userList;
        },

        removeContat: function(index){
            userList.splice(index,1);
        }
    };



});


module.controller('calc',function($scope){



    $scope.suma = function(){

       $scope.sum.resultado = $scope.sum.num1 + $scope.sum.num2;


    };

    $scope.multi = function(){

        $scope.mult.resultado = $scope.mult.num1 * $scope.mult.num2;

    };

});

/*

 TODO: module.service vrs module.factory ???

 factory espera un return  del objeto.
 con service se accesa con this.

  */