angular.module('myApp.Services',[])
 .factory('httpFactory', function($http){
    var factory = {};

    factory.getempApi = function(id){
        return $http({
		url:'/getEmpApprisalBasedOnId?_id='+id,
		method:'GET'
		});
    };
	
	factory.EmpBasedOnIdapi = function(id){
        return $http({
			url:'/getEmpBasedOnId?_id='+id,
			method:'GET'
		});
    };
	
	
	factory.loginApi = function(email,password){
        return $http({
			url:'/loginApi?email='+email+'&password='+password,
			method:'GET'
			});
    };
	
	factory.getTlNameForManager = function(id){
        return $http({
			url:'/getEmpBasedOnTlId?mgrmail='+id+'&role=lead',
	        method:'GET'
		});
    };
	factory.getEmployeesforTlApi = function(id){
        return $http({
		url:'/getEmpBasedOnId?tlmail='+id,
		 method:'GET'
		});
    };
	factory.getEmpAppraisalApi = function(data){
        return $http({
			url:"/getEmpApprisalBasedOnId?_id="+data,
			method:"GET"
		
		});
    };
	
	factory.updateAppraisalApi = function(data){
        return $http({
		url:"/updateApprisal",data,
		 method:'POST'
		});
    };
	
	factory.getAppraisalApi = function(data){
        return $http({
			url:"/getApprisalBasedOnId",data,
		    method:"POST"
		});
    };
	factory.empListApi = function(data){
	return $http({
		url:"/empListApi",data,
		 method:"POST"
		 });
    };
	factory.empRegistration = function(data){
	return $http({
		url:"/empRegistrationApi",data,
	    method:"POST"
	});
    };
	factory.createApprisalFormApi = function(data){
	return $http({
          url:"/createApprisalForm",data,
	      method:"POST"
	});
    };
	factory.empUpdateProfileApi = function(data){
	return $http({
		url:"/empUpdateProfile",data,
		method:"POST"
		});
    };
	

    return factory;
});