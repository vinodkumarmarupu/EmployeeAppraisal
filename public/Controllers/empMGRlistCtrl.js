
angular.module('myApp',[])
.controller('empMGRlistCtrl', empMGRlistCtrl)
 function empMGRlistCtrl($scope,$http){
var vm=this;
$http.get("/getEmpBasedOnId?mgrmail="+id).then (function(response){

console.log(response.data.success);

if(response.data.success=="noting was found"){

vm.emptyResponse="NO Records";

}else{
console.log(response.data);
$scope.result1=response.data;
}

})


vm.edit=function(id){
alert(id);

document.getElementById("empList").style.display="block";

$http.get("/getEmpBasedOnId?mgrmail="+id).then (function(response){

console.log(response.data.success);

if(response.data.success=="noting was found"){

vm.emptyResponse="NO Records";

}else{
console.log(response.data);
vm.result1=response.data;
}

})
//window.location.assign("/updateProfileByHr");

}
$http.get("/getEmpBasedOnTlId?mgrmail="+localStorage.getItem("email")+"&role=lead").then (function(response){

console.log(response.data.length);
if(response.data.success=="noting was found"){

vm.emptyResponse="NO Records";

}else{

vm.result=response.data;
}

})
}