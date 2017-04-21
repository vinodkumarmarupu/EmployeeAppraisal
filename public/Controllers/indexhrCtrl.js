angular.module('myApp', [])
 
.controller('indexhrCtrl', indexhrCtrl)
function indexhrCtrl($scope,$http,$rootScope,$location){
//alert("hi");

$scope.yourmail=localStorage.getItem('email');
//requesting Apprisal Length
	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":0,
	"status":1

	};

	$http.post('http://localhost:3000/empListApi',requestingApprisalJSON).then(function(response ){

	$scope.requestingApprisalLength=response.data.length;

	})
	
//requested Apprisal Length
	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":1,
	"status":1

	};

	$http.post('http://localhost:3000/empListApi',requestingApprisalJSON).then(function(response ){
    console.log(response.data.length);
	$scope.requestedApprisalLength=response.data.length;

	})
//apprisalListHR
	var apprisalListHR={
	"HRemail":localStorage.getItem("email"),
	"status":"2",
	"HRSubmitted":"0"
	}


	$http.post("http://localhost:3000/getApprisalBasedOnId",apprisalListHR).then (function(response){

	if(response.data.success=="noting was found"){

	$scope.result="Noting Was found!!!";
	
	$scope.apprisalListHRLength=0;
	}
	else{
	$scope.apprisalListHRLength=response.data.length;
	
	}
	})
//Employee List
$http.get("http://localhost:3000/empListApi").then(function(response){
$scope.result=response.data;
	console.log(response.data);
	})
}
