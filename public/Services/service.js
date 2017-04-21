angular.module('myApp.Services',[])
 .service('studentSessionFactory', function($http){
    var factory = {};

    factory.getSessions = function(email,password){
        return $http.get("/loginApi?email="+email+"&password="+password,{type:'application/text'});
    };

    return factory;
});