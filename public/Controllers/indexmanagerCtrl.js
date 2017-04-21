angular.module('myApp', [])
 
.controller('indexmanagerCtrl',indexmanagerCtrl)
 function indexmanagerCtrl($scope,$http,$rootScope,$location){

$scope.yourmail=localStorage.getItem('email');

//pending apprisalListTL
	var pendingApprisalListManager={
	"managerEmail":localStorage.getItem("email"),
	"TLSubmitted":"1",
	"status":"1"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",pendingApprisalListManager).then (function(response){

	if(response.data.success=="noting was found"){

	$scope.result="Noting Was found!!!";
	
	$scope.apprisalListManagerLength=0;
	}
	else{
	$scope.apprisalListManagerLength=response.data.length;
	
	}
	})
	
	
//updated apprisalListTL
	var updatedApprisalListTL={
	"managerEmail":localStorage.getItem("email"),
	"managerSubmitted":"1"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",updatedApprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	$scope.result="Noting Was found!!!";
	
	$scope.updatedApprisalListManagerLength=0;
	}
	else{
	$scope.updatedApprisalListManagerLength=response.data.length;
	
	}
	})
}