
var updatedAppraisallistHRCtrl=	function (httpFactory){

	var vm=this;

	var apprisalListHR={
	"HRemail":localStorage.getItem("email"),
	"HRSubmitted":"1"
	}


	httpFactory.getAppraisalApi(apprisalListHR).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	//$scope.apprisalListHRLength=0;
	}
	else{
	vm.result=response.data;
	
	}
	})
}

	angular.module('myApp')
	.controller('updatedAppraisallistHRCtrl',updatedAppraisallistHRCtrl);