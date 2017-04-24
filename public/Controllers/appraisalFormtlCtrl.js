

var appraisalFormtlCtrl= function ($location,$rootScope,httpFactory){
console.log("id" +localStorage.getItem('empId'));
var vm=this;

httpFactory.getempApi(localStorage.getItem('empId')).then(function(response){
console.log(JSON.stringify(response.data));

if(response.data.success=="noting was found"){

}else{
   vm.tlapemail=response.data[0]._id;
   vm.tlapname=response.data[0].name;
   vm.tlapdesignation=response.data[0].designation;
  vm.tlapmonth=response.data[0].month,
 vm.tlaptimeInposition=response.data[0].TimeInPosition,
 vm.tlaptrDetails=response.data[0].TrainingDetails,
 vm.tlapprojects=response.data[0].Projects,
 vm.tlapresponsibilities=response.data[0].responsibilities
 vm.tlapdfInterest=response.data[0].difficultyInterest,
 vm.tlapachievements=response.data[0].achievements,
 vm.empsubmitted=response.data[0].EmpSubmitted
 alert(response.data[0].EmpSubmitted);
 }
 

})
vm.register=function(){

var insertAppraisalJson=
{       
        "_id":vm.tlapemail,
		"name":vm.tlapname,
		"designation":vm.tlapdesignation,
		"month":vm.tlapmonth,
		"TimeInPosition":vm.tlaptimeInposition,
		"TrainingDetails":vm.tlaptrDetails,
		"Projects":vm.tlapprojects,
		"responsibilities":vm.tlapresponsibilities,
		"difficultyInterest":vm.tlapdfInterest,
		"achievements":vm.tlapachievements,
		"TLname":vm.tlname,
		"TLemail":vm.tlmail,
		"managerName":vm.mgrname,
		"managerEmail":vm.mgrmail,
		"HRname":vm.hrname,
		"HRemail":vm.hrmail,
		"TLcomment":vm.tlapcomments,
		"TLrating":vm.tlapratings,
		"status":"0",
		"empsubmitted":"1",
		"TLSubmitted":"0",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
httpFactory.updateAppraisalApi(insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

vm.result="Email Already Exists!!!";
console.log(vm.result);
alert("Some Thing Went Wrong!!!");


}
else{
vm.result=response.data;
console.log(JSON.stringify(vm.result));
vm.apprisal="Success";
//$location.path("/login");
}
})
}
console.log( localStorage.getItem('empId'));
vm.finalSubmit=function(){


var insertAppraisalJson=
{       
        "_id":localStorage.getItem('empId'),
		"name":vm.apname,
		"designation":vm.apdesignation,
		"month":vm.apmonth,
		"TimeInPosition":vm.aptimeInposition,
		"TrainingDetails":vm.aptrDetails,
		"Projects":vm.approjects,
		"responsibilities":vm.apresponsibilities,
		"difficultyInterest":vm.apdfInterest,
		"achievements":vm.apachievements,
		"TLname":vm.tlname,
		"TLemail":vm.tlmail,
		"managerName":vm.mgrname,
		"managerEmail":vm.mgrmail,
		"HRname":vm.hrname,
		"HRemail":vm.hrmail,
		"TLcomment":vm.tlapcomments,
		"TLrating":vm.tlapratings,
		"status":"1",
		"empsubmitted":"1",
		"TLSubmitted":"1",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
httpFactory.updateAppraisalApi(insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

vm.result="Email Already Exists!!!";
console.log(vm.result);
alert("Some Thing Went Wrong!!!");


}
else{
vm.result=response.data;
console.log(JSON.stringify(vm.result));
vm.apprisal="Success";
window.location.assign('/TLhome');
}
})
}
}
angular.module('myApp')
.controller('appraisalFormtlCtrl', appraisalFormtlCtrl);