	angular.module('myApp',[])
	.controller('pendingAppraisallistTLCtrl',pendingAppraisallistTLCtrl)
	function pendingAppraisallistTLCtrl($scope,$http){

    var vm=this;
	vm.edit=function(id){
     alert(id);
	localStorage.setItem('empId',id);
	window.location.assign("/appraisalFormtl");

	}


	var apprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"status":"0",
    "EmpSubmitted":"1",
	"TLSubmitted":"0"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	}
	else{
	vm.result=response.data;
	
	}
	})
	}
