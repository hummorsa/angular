
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