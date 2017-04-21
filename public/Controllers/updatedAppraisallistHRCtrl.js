
	angular.module('myApp',[])
	.controller('updatedAppraisallistHRCtrl',updatedAppraisallistHRCtrl)
	function updatedAppraisallistHRCtrl($http){

	var vm=this;

	var apprisalListHR={
	"HRemail":localStorage.getItem("email"),
	"HRSubmitted":"1"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListHR).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	//$scope.apprisalListHRLength=0;
	}
	else{
	vm.result=response.data;
	
	}
	})
}