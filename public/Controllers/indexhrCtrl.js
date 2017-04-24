
function indexhrCtrl($location,httpFactory){
alert("hi");
var vm=this;
vm.yourmail=localStorage.getItem('email');
//requesting Apprisal Length
	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":0,
	"status":1

	};

	httpFactory.empListApi(requestingApprisalJSON).then(function(response ){

	vm.requestingApprisalLength=response.data.length;

	})
	
//requested Apprisal Length
	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":1,
	"status":1

	};

	httpFactory.empListApi(requestingApprisalJSON).then(function(response ){
    console.log(response.data.length);
	vm.requestedApprisalLength=response.data.length;

	})
//apprisalListHR
	var apprisalListHR={
	"HRemail":localStorage.getItem("email"),
	"status":"2",
	"HRSubmitted":"0"
	}


	httpFactory.getAppraisalApi(apprisalListHR).then (function(response){

	if(response.data.success=="noting was found"){

	vm.result="Noting Was found!!!";
	
	vm.apprisalListHRLength=0;
	}
	else{
	vm.apprisalListHRLength=response.data.length;
	
	}
	})
//Employee List
httpFactory.empListApi().then(function(response){
vm.result=response.data;
	console.log(response.data);
	})
}
angular.module('myApp')
 
.controller('indexhrCtrl', indexhrCtrl);