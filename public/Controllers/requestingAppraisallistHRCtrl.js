
	var requestingAppraisallistHRCtrl=function (httpFactory){
     var vm=this;
	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":0,
	"status":1

	};

	httpFactory.empListApi(requestingApprisalJSON).then(function(response ){

	vm.result=response.data;

	})

	vm.edit=function(id){

httpFactory.EmpBasedOnIdapi(id).then(function(response){
console.log(JSON.stringify(response.data));
 
 
 var insertAppraisalJson=
{       
        "_id":id,
		"name":response.data[0].fname,
		"designation":response.data[0].designation,
		"month":response.data[0].date,
		"TLname":response.data[0].tlname,
		"TLemail":response.data[0].tlmail,
		"managerName":response.data[0].mgrname,
		"managerEmail":response.data[0].mgrmail,
		"HRname":response.data[0].hrname,
		"HRemail":response.data[0].hrmail,
		"status":"0",
		"EmpSubmitted":"0",
		"TLSubmitted":"0",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
httpFactory.createApprisalFormApi(insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

vm.result="Email Already Exists!!!";

alert("Some Thing Went Wrong!!!");


}
else{
vm.result=response.data;
console.log(JSON.stringify(vm.result));
vm.apprisal="Success";


var updateEmpApprisalJson=
{       
        "_id":id,
		"HRAparisalStatus":"1",
		"empAparisalStatus":"0"
		
		
	}

httpFactory.empUpdateProfileApi(updateEmpApprisalJson).then (function(response){

console.log(JSON.stringify(response.data));

vm.result=response.data;
window.location.assign("/HRhome");
})
}
})
})
}
}

	angular.module('myApp')
	.controller('requestingAppraisallistHRCtrl',requestingAppraisallistHRCtrl);