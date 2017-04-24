
	
	var updatedAppraisallistMGRCtrl=function (httpFactory){
    var vm=this;
	var apprisalListTL={
	"managerEmail":localStorage.getItem("email"),
	"managerSubmitted":"1"
	}
	httpFactory.getAppraisalApi(apprisalListTL).then (function(response){

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
	.controller('updatedAppraisallistMGRCtrl',updatedAppraisallistMGRCtrl);