
angular.module('myApp',[])
.controller('appraisalFormMGRCtrl', appraisalFormMGRCtrl)
function appraisalFormMGRCtrl(vm,$http,$location,$rootScope){
console.log("id" +localStorage.getItem('empId'));

var vm=this;

$http.get("http://localhost:3000/getEmpApprisalBasedOnId?_id="+localStorage.getItem('empId')).then(function(response){
console.log(JSON.stringify(response.data));

if(response.data.success=="noting was found"){

}else{
   vm.mgrapemail=response.data[0]._id;
   vm.mgrapname=response.data[0].name;
   vm.mgrapdesignation=response.data[0].designation;
  vm.mgrapmonth=response.data[0].month,
 vm.mgraptimeInposition=response.data[0].TimeInPosition,
 vm.mgraptrDetails=response.data[0].TrainingDetails,
 vm.mgrapprojects=response.data[0].Projects,
 vm.mgrapresponsibilities=response.data[0].responsibilities
 vm.mgrapdfInterest=response.data[0].difficultyInterest,
 vm.mgrapachievements=response.data[0].achievements,
 vm.mgrtlapratings=response.data[0].TLrating,
 vm.mgrtlapcomments=response.data[0].TLcomment,
 vm.empsubmitted=response.data[0].EmpSubmitted
 //alert(response.data[0].EmpSubmitted);
 }
 

})
vm.register=function(){

var insertAppraisalJson=
{       
        "_id":vm.mgrapemail,
		"name":vm.mgrapname,
		"designation":vm.mgrapdesignation,
		"month":vm.mgrapmonth,
		"TimeInPosition":vm.mgraptimeInposition,
		"TrainingDetails":vm.mgraptrDetails,
		"Projects":vm.mgrapprojects,
		"responsibilities":vm.mgrapresponsibilities,
		"difficultyInterest":vm.mgrapdfInterest,
		"achievements":vm.mgrapachievements,
		"TLname":vm.tlname,
		"TLemail":vm.tlmail,
		"managerName":vm.mgrname,
		"managerEmail":vm.mgrmail,
		"HRname":vm.hrname,
		"HRemail":vm.hrmail,
		"TLcomment":vm.mgrtlapcomments,
		"TLrating":vm.mgrtlapratings,
		"managerComment":vm.mgrapcomments,
		"managerRating":vm.mgrapratings,
		"status":"1",
		"empsubmitted":"1",
		"TLSubmitted":"1",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
$http.post("http://localhost:3000/updateApprisal",insertAppraisalJson).then (function(response){

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
		"name":vm.mgrapname,
		"designation":vm.mgrapdesignation,
		"month":vm.mgrapmonth,
		"TimeInPosition":vm.mgraptimeInposition,
		"TrainingDetails":vm.mgraptrDetails,
		"Projects":vm.mgrapprojects,
		"responsibilities":vm.mgrapresponsibilities,
		"difficultyInterest":vm.mgrapdfInterest,
		"achievements":vm.mgrapachievements,
		"TLname":vm.tlname,
		"TLemail":vm.tlmail,
		"managerName":vm.mgrname,
		"managerEmail":vm.mgrmail,
		"HRname":vm.hrname,
		"HRemail":vm.hrmail,
		"TLcomment":vm.tlapcomments,
		"TLrating":vm.tlapratings,
		"managerComment":vm.mgrapcomments,
		"managerRating":vm.mgrapratings,
		"status":"2",
		"empsubmitted":"1",
		"TLSubmitted":"1",
		"managerSubmitted":"1",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
$http.post("http://localhost:3000/updateApprisal",insertAppraisalJson).then (function(response){

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
window.location.assign('/MGRhome');
}
})
}
}
