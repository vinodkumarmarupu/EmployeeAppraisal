

var	pendingEmployeeListhrCtrl=function (httpFactory){
    var vm=this;

	vm.edit=function(id){
    // alert(id);
	localStorage.setItem('empId',id);
	window.location.assign("/updateProfileByHr");

	}
	var json={
	 
	 "status":0

		
	};

	httpFactory.empListApi(json).then(function(response){

	vm.result=response.data;
	})
	}

	angular.module('myApp')
	.controller('pendingEmployeeListhrCtrl',pendingEmployeeListhrCtrl);