angular.module('myApp', [])
 
.controller('indexempCtrl', indexempCtrl)
 function indexempCtrl($scope,$http,$rootScope,$location){
//alert(localStorage.getItem("email"));

$http.get("http://localhost:3000/getEmpBasedOnId?_id="+localStorage.getItem("email")).then(function(response){

if(response.data[0].status=="1" && response.data[0].HRAparisalStatus=="1" && response.data[0].empAparisalStatus=="0"){
//alert("0");
$scope.value=false;

}else{
$scope.value=true;
}
});
$scope.yourmail=localStorage.getItem('email');

$http.get("http://localhost:3000/getEmpApprisalBasedOnId?_id="+localStorage.getItem("email")).then(function(response){

console.log(response.data[0].status);

if(response.data[0].status=="0" && response.data[0].EmpSubmitted=="0"){
	
	$scope.empvalue=0;
	
}else if(response.data[0].status=="0" && response.data[0].EmpSubmitted=="1"){
    $scope.empvalue=25;

}else if(response.data[0].status=="1"){
$scope.empvalue=50;
	
}else if(response.data[0].status=="2"){
$scope.empvalue=75;
	
}else if(response.data[0].status=="3"){
$scope.empvalue=100;
	
}
console.log(response.data);
})
}