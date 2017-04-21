	angular.module('myApp',[])
	.controller('updatedEmployeeListHRCtrl',updatedEmployeeListHRCtrl)
	function updatedEmployeeListHRCtrl($scope,$http){
    var vm=this;

	var json={
	 
	 "status":1		
	};

	$http.post('http://localhost:3000/empListApi',json).then(function(response){

	vm.result=response.data;
	//alert(response.data)
	})

	
	}
