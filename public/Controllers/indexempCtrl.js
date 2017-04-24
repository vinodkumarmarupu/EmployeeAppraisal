
 var indexempCtrl=function ($scope,$location,httpFactory){
alert(localStorage.getItem("email"));
var vm=this;
vm.email=localStorage.getItem("email");
httpFactory.EmpBasedOnIdapi(vm.email).then(function(response){

if(response.data[0].status=="1" && response.data[0].HRAparisalStatus=="1" && response.data[0].empAparisalStatus=="0"){
alert("0");
vm.value=false;

}else{
vm.value=true;
}
});
vm.yourmail=localStorage.getItem('email');


httpFactory.getEmpAppraisalApi(vm.yourmail).then(function(response){
vm.empvalue=0;
console.log(response.data[0].status);

if(response.data[0].status=="0" && response.data[0].EmpSubmitted=="0"){
	
	vm.empvalue=0;
	alert(vm.empvalue);
	
}else if(response.data[0].status=="0" && response.data[0].EmpSubmitted=="1"){
    vm.empvalue=25;

}else if(response.data[0].status=="1"){
vm.empvalue=50;
	
}else if(response.data[0].status=="2"){
vm.empvalue=75;
	
}else if(response.data[0].status=="3"){
vm.empvalue=100;
	
}
console.log(response.data);
})
}
angular.module('myApp')
 
.controller('indexempCtrl', indexempCtrl);