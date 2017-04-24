
var appraisalFormhrCtrl=function ($location,$rootScope,httpFactory){
var vm=this
httpFactory.getempApi(localStorage.getItem('empId')).then(function(response){
console.log(JSON.stringify(response.data));

if(response.data.success=="noting was found"){

}else{
   vm.hrapemail=response.data[0]._id;
   vm.hrapname=response.data[0].name;
   vm.hrapdesignation=response.data[0].designation;
  vm.hrapmonth=response.data[0].month,
 vm.hraptimeInposition=response.data[0].TimeInPosition,
 vm.hraptrDetails=response.data[0].TrainingDetails,
 vm.hrapprojects=response.data[0].Projects,
 vm.hrapresponsibilities=response.data[0].responsibilities
 vm.hrapdfInterest=response.data[0].difficultyInterest,
 vm.hrapachievements=response.data[0].achievements,
 vm.hrtlapratings=response.data[0].TLrating,
 vm.hrtlapcomments=response.data[0].TLcomment,
  vm.hrmgrapratings=response.data[0].managerRating,
 vm.hrmgrapcomments=response.data[0].managerComment,
 vm.empsubmitted=response.data[0].EmpSubmitted
 //alert(response.data[0].EmpSubmitted);
 }
 

})




vm.register=function(){

var insertAppraisalJson=
{       
        "_id":vm.hrapemail,
		"name":vm.hrapname,
		"designation":vm.hrapdesignation,
		"month":vm.hrapmonth,
		"TimeInPosition":vm.hraptimeInposition,
		"TrainingDetails":vm.hraptrDetails,
		"Projects":vm.hrapprojects,
		"responsibilities":vm.hrapresponsibilities,
		"difficultyInterest":vm.hrapdfInterest,
		"achievements":vm.hrapachievements,
		"TLname":vm.tlname,
		"TLemail":vm.tlmail,
		"managerName":vm.mgrname,
		"managerEmail":vm.mgrmail,
		"HRname":vm.hrname,
		"HRemail":vm.hrmail,
		"TLrating" :vm.hrtlapratings,
        "TLcomment":vm.hrtlapcomments,
        "managerRating": vm.hrmgrapratings,
        "managerComment":vm.hrmgrapcomments,
		"HRrating" :vm.hrapratings,
        "HRcomment":vm.hrapcomments,
		"status":"2",
		"EmpSubmitted":"1",
		"TLSubmitted":"1",
		"managerSubmitted":"1",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
httpFactory.updateAppraisalApi(insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

vm.result="Email Already Exists!!!";
console.log(vm.result);
//alert("Some Thing Went Wrong!!!");


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
		"name":vm.hrapname,
		"designation":vm.hrapdesignation,
		"month":vm.hrapmonth,
		"TimeInPosition":vm.hraptimeInposition,
		"TrainingDetails":vm.hraptrDetails,
		"Projects":vm.hrapprojects,
		"responsibilities":vm.hrapresponsibilities,
		
		"difficultyInterest":vm.hrapdfInterest,
		"achievements":vm.hrapachievements,
		"TLname":vm.tlname,
		"TLemail":vm.tlmail,
		"managerName":vm.mgrname,
		"managerEmail":vm.mgrmail,
		"HRname":vm.hrname,
		"HRemail":vm.hrmail,
		"TLrating" :vm.hrtlapratings,
        "TLcomment":vm.hrtlapcomments,
        "managerRating": vm.hrmgrapratings,
        "managerComment":vm.hrmgrapcomments,
		"HRrating" :vm.hrapratings,
        "HRcomment":vm.hrapcomments,
		"status":"3",
		"EmpSubmitted":"1",
		"TLSubmitted":"1",
		"managerSubmitted":"1",
		"HRSubmitted":"1"		
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
window.location.assign("/HRhome");
//$location.path("/login");
}
})
}
}

angular.module('myApp')
.controller('appraisalFormhrCtrl', appraisalFormhrCtrl);