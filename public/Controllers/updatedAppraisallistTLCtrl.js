
var updatedAppraisallistTLCtrl=	function (httpFactory){
    var vm=this;
	var apprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"TLSubmitted":"1"
	}


	httpFactory.getAppraisalApi(apprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	//vm.apprisalListHRLength=0;
	}
	else{
	vm.result=response.data;
	
	}
	})

	}


	angular.module('myApp')
	.controller('updatedAppraisallistTLCtrl', updatedAppraisallistTLCtrl);