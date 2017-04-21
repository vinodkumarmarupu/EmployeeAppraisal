

	angular.module('myApp',[])
	.controller('pendingEmployeeListhrCtrl',pendingEmployeeListhrCtrl)
	function pendingEmployeeListhrCtrl($scope,$http){
    var vm=this;

	vm.edit=function(id){
    // alert(id);
	localStorage.setItem('empId',id);
	window.location.assign("/updateProfileByHr");

	}
	var json={
	 
	 "status":0

		
	};

	$http.post('http://localhost:3000/empListApi',json).then(function(response){

	vm.result=response.data;
	})
	}
