
	angular.module('myApp',[])
	.controller('requestingAppraisallistHRCtrl',requestingAppraisallistHRCtrl)
	function requestingAppraisallistHRCtrl($scope,$http){
     var vm=this;
	var requestingApprisalJSON={

	"date":"april",
	"HRAparisalStatus":0,
	"status":1

	};

	$http.post('http://localhost:3000/empListApi',requestingApprisalJSON).then(function(response ){

	vm.result=response.data;

	})

	vm.edit=function(id){

$http.get("http://localhost:3000/getEmpBasedOnId?_id="+id).then(function(response){
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
		"empsubmitted":"0",
		"TLSubmitted":"0",
		"managerSubmitted":"0",
		"HRSubmitted":"0"
		
		
	}
console.log(JSON.stringify(insertAppraisalJson));
$http.post("http://localhost:3000/createApprisalForm",insertAppraisalJson).then (function(response){

console.log(JSON.stringify(response.data));


if(response.data.error=="error"){

vm.result="Email Already Exists!!!";
console.log($scope.result);
alert("Some Thing Went Wrong!!!");


}
else{
vm.result=response.data;
console.log(JSON.stringify($scope.result));
vm.apprisal="Success";


var updateEmpApprisalJson=
{       
        "_id":id,
		"HRAparisalStatus":"1",
		"empAparisalStatus":"0"
		
		
	}

$http.post("http://localhost:3000/empUpdateProfile",updateEmpApprisalJson).then (function(response){

console.log(JSON.stringify(response.data));

vm.result=response.data;
window.location.assign("/HRhome");
})
}
})
})
}
}
