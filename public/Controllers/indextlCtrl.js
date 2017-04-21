
angular.module('myApp', [])
 
.controller('indextlCtrl',indextlCtrl)
 function indextlCtrl($scope,$http,$rootScope,$location){
//alert("hi");

$scope.yourmail=localStorage.getItem('email');

//pending apprisalListTL
	var pendingapprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"EmpSubmitted":"1",
	"status":"0",
	"TLSubmitted":"0"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",pendingapprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	$scope.result="Noting Was found!!!";
	
	$scope.pendingApprisalListTLLength=0;
	}
	else{
	$scope.pendingApprisalListTLLength=response.data.length;
	
	}
	})
	
	
//updated apprisalListTL
	var updatedApprisalListTL={
	"TLemail":localStorage.getItem("email"),
	"TLSubmitted":"1"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",updatedApprisalListTL).then (function(response){

	if(response.data.success=="noting was found"){

	$scope.result="Noting Was found!!!";
	
	$scope.updatedApprisalListTLLength=0;
	}
	else{
	$scope.updatedApprisalListTLLength=response.data.length;
	console.log(response.data.length);
	}
	})
}