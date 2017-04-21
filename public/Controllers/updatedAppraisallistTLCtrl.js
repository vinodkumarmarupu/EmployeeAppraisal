
	angular.module('myApp',[])
	.controller('updatedAppraisallistTLCtrl', updatedAppraisallistTLCtrl)
	function updatedAppraisallistTLCtrl($http){
    var vm=this;
	var apprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"TLSubmitted":"1"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	//vm.apprisalListHRLength=0;
	}
	else{
	vm.result=response.data;
	
	}
	})

	}

