
 var empMGRlistCtrl=function (httpFactory){
	 
var vm=this;
httpFactory.getTlNameForManager(localStorage.getItem("email")).then (function(response){

console.log(response.data.success);

if(response.data.success=="noting was found"){

vm.emptyResponse="NO Records";

}else{
console.log(response.data);
vm.result1=response.data;
}

})


vm.edit=function(id){
alert(id);

document.getElementById("empList").style.display="block";

httpFactory.getEmployeesforTlApi(id).then (function(response){

console.log(response.data.length);

if(response.data.success=="noting was found"){

vm.emptyResponse="NO Records";

}else{

vm.result=response.data;
console.log(vm.result);
}

})
//window.location.assign("/updateProfileByHr");

}

}

angular.module('myApp')
.controller('empMGRlistCtrl', empMGRlistCtrl);