

 var updateprofilebyhrCtrl=function (httpFactory){
	 var vm=this;
httpFactory.EmpBasedOnIdapi(localStorage.getItem('empId')).then(function(response){
console.log(JSON.stringify(response.data));
 vm.huemail=response.data[0]._id,
 vm.hufname=response.data[0].fname,
 vm.hulname=response.data[0].lname,
 vm.hudesig=response.data[0].designation,
 vm.huphone=response.data[0].phonenumber,
 vm.hurole=response.data[0].role
})
vm.UpdateEmpData=function(){
var updateEmpJson=
{       
        "_id":vm.huemail,
		"role":vm.hurole,
		"tlname":vm.hutlname,
		"tlmail":vm.hutlmail,
		"mgrname":vm.humgrname,
		"mgrmail":vm.humgrmail,
		"hrname":vm.huhrname,
		"hrmail":vm.huhrmail,
		"status":1,
		"date":vm.hudate
	}

httpFactory.empUpdateProfileApi(updateEmpJson).then (function(response){

console.log(JSON.stringify(response.data));

vm.result=response.data;

window.location.assign("/HRhome");
})
}

}
angular.module('myApp')
.controller('updateprofilebyhrCtrl',updateprofilebyhrCtrl);
