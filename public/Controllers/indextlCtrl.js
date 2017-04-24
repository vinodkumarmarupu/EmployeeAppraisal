
 var indextlCtrl=function (httpFactory){
//alert("hi");
var vm=this;
vm.yourmail=localStorage.getItem('email');

//pending apprisalListTL
	var pendingapprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"EmpSubmitted":"1",
	"status":"0",
	"TLSubmitted":"0"
	}


	httpFactory.getAppraisalApi(pendingapprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	vm.pendingApprisalListTLLength=0;
	}
	else{
	vm.pendingApprisalListTLLength=response.data.length;
	
	}
	})
	
	
//updated apprisalListTL
	var updatedApprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"TLSubmitted":"1"
	}


	httpFactory.getAppraisalApi(updatedApprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	vm.updatedApprisalListTLLength=0;
	}
	else{
	vm.updatedApprisalListTLLength=response.data.length;
	console.log(response.data.length);
	}
	})
}

angular.module('myApp')
 
.controller('indextlCtrl',indextlCtrl);