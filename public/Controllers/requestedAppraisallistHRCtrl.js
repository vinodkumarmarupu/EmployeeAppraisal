
var requestedAppraisallistHRCtrl=function (httpFactory){
    var vm=this;


	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":1,
	"status":1

	};

	httpFactory.empListApi(requestingApprisalJSON).then(function(response ){
    console.log(response.data.length);
	vm.result=response.data;

	})	
}


	angular.module('myApp')
	.controller('requestedAppraisallistHRCtrl',requestedAppraisallistHRCtrl);