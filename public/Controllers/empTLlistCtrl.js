
 var empTLlistCtrl=function (httpFactory){
	 
var vm=this;
httpFactory.getEmployeesforTlApi(localStorage.getItem("email")).then (function(response){

console.log(response.data.success);

if(response.data.success=="noting was found"){

vm.emptyResponse="NO Records";

}else{
console.log(response.data);
vm.result=response.data;
}

})




}

angular.module('myApp')
.controller('empTLlistCtrl', empTLlistCtrl);