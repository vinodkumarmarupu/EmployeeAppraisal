
	angular.module('myApp',[])
	.controller('updatedAppraisallistMGRCtrl',updatedAppraisallistMGRCtrl)
	function updatedAppraisallistMGRCtrl($http){
    var vm=this;
	var apprisalListTL={
	"managerEmail":localStorage.getItem("email"),
	"managerSubmitted":"1"
	}
	$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	//$scope.apprisalListHRLength=0;
	}
	else{
	vm.result=response.data;
	
	}
	})
	}