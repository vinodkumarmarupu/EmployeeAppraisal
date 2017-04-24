
var updatedEmployeeListHRCtrl=	function (httpFactory){
    var vm=this;

	var json={
	 
	 "status":1		
	};

	httpFactory.empListApi(json).then(function(response){

	vm.result=response.data;
	//alert(response.data)
	})

	
	}
	angular.module('myApp')
	.controller('updatedEmployeeListHRCtrl',updatedEmployeeListHRCtrl);