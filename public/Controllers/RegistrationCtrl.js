
 var RegistrationCtrl=function (httpFactory){
var vm=this;

vm.register=function(){

var updateEmpJson=

{       

        "email":vm.inputEmail,
		"fname":vm.inputFirstname,
		"lname":vm.inputLastname,
		"desig":vm.inputDesignation,
		"phone":vm.inputPhoneNumber,
		"password":vm.inputPassword,
		"role":vm.inputRole,
		"status":"0",
		"HRAparisalStatus":"0",
		"empAparisalStatus":"0"
	}
console.log(JSON.stringify(updateEmpJson));
httpFactory.empRegistration(updateEmpJson).then (function(response){
console.log(JSON.stringify(response.data));
if(response.data.error=="error"){

vm.result="Email Already Exists!!!";

console.log(vm.result);
}

else{

vm.result=response.data;

console.log(JSON.stringify(vm.result));
window.location.assign("/login");
}
})
}
}

angular.module('myApp')

.controller('RegistrationCtrl',RegistrationCtrl);