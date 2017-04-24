

function appraisalFormempCtrl($location,$rootScope,httpFactory){
	var vm=this;
httpFactory.getempApi(localStorage.getItem('email')).then(function(response){
console.log(JSON.stringify(response.data));

if(response.data.success=="noting was found"){

}else{
 vm.apemail=response.data[0]._id;
 vm.apname=response.data[0].name;
 vm.apdesignation=response.data[0].designation;
 vm.apmonth=response.data[0].month,
 vm.aptimeInposition=response.data[0].TimeInPosition,
 vm.aptrDetails=response.data[0].TrainingDetails,
 vm.approjects=response.data[0].Projects,
 vm.apresponsibilities=response.data[0].responsibilities
 vm.apdfInterest=response.data[0].difficultyInterest,
 vm.apachievements=response.data[0].achievements,
 vm.empsubmitted=response.data[0].EmpSubmitted
 //alert(response.data[0].EmpSubmitted);
 }

})
 
vm.register=function(){

var insertAppraisalJson=
{       
        "_id":vm.apemail,
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
		"status":"0",
		"EmpSubmitted":"0",
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
alert(vm.apprisal);
//$location.path("/login");
}



})
}
console.log( localStorage.getItem('email'));
vm.finalSubmit=function(){


var insertAppraisalJson=
{       
        "_id":localStorage.getItem('email'),
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
		"status":"0",
		"EmpSubmitted":"1",
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
var updateEmpJson=
{       
        "_id":localStorage.getItem('email'),
	    "empAparisalStatus":"1"
		}
httpFactory.empUpdateProfileApi(updateEmpJson).then (function(response){
console.log(JSON.stringify(response.data));
vm.result=response.data;
})

vm.result=response.data;
console.log(JSON.stringify(vm.result));
vm.apprisal="Success";
window.location.assign("/EMPhome");
//$location.path("/login");
}
})
}
}

angular.module('myApp')
.controller('appraisalFormempCtrl',appraisalFormempCtrl);