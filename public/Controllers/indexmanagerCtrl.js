
var indexmanagerCtrl=function ($rootScope,$location,httpFactory){
var vm=this;
vm.yourmail=localStorage.getItem('email');

//pending apprisalListTL
	var pendingApprisalListManager={
	"managerEmail":localStorage.getItem("email"),
	"TLSubmitted":"1",
	"status":"1"
	}


	httpFactory.getAppraisalApi(pendingApprisalListManager).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	vm.apprisalListManagerLength=0;
	}
	else{
	vm.apprisalListManagerLength=response.data.length;
	
	}
	})
	
	
//updated apprisalListTL
	var updatedApprisalListTL={
	"managerEmail":localStorage.getItem("email"),
	"managerSubmitted":"1"
	}


	httpFactory.getAppraisalApi(updatedApprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	vm.updatedApprisalListManagerLength=0;
	}
	else{
	vm.updatedApprisalListManagerLength=response.data.length;
	
	}
	})
}

angular.module('myApp')
 
.controller('indexmanagerCtrl',indexmanagerCtrl);