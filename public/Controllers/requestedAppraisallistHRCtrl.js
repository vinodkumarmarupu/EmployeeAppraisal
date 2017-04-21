
	angular.module('myApp',[])
	.controller('requestedAppraisallistHRCtrl',requestedAppraisallistHRCtrl)
	function requestedAppraisallistHRCtrl($scope,$http){
    var vm=this;


	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":1,
	"status":1

	};

	$http.post('http://localhost:3000/empListApi',requestingApprisalJSON).then(function(response ){
    console.log(response.data.length);
	vm.result=response.data;

	})	
}