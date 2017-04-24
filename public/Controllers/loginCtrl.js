

function loginCtrl($rootScope,$location,httpFactory){
var vm=this;

vm.login=function(){

httpFactory.loginApi(vm.email,vm.password).then (function(response){

vm.loginData=response.data;
localStorage.setItem('role',response.data.role);
if(response.data.success=="Check your credentials"){
console.log("error");
}else if(response.data.role=="dev"){
localStorage.setItem('email',vm.loginData._id);
console.log("dev");

vm.Name=vm.loginData._id;
console.log(JSON.stringify(response.data));

window.location.assign("/EMPhome");
}else if(response.data.role=="lead"){
localStorage.setItem('email',vm.loginData._id);
console.log("lead");
window.location.assign("/TLhome");
}else if(response.data.role=="manager"){
console.log("manager");
localStorage.setItem('email',vm.loginData._id);
window.location.assign("/MGRhome");
}else if(response.data.role=="hr"){
console.log("hr");
localStorage.setItem('email',vm.loginData._id);
window.location.assign("/HRhome");
}else{
console.log("nothing");
}
//alert("status"+status+"config"+JSON.stringify(config)+"statusText"+statusText);
});
}
}
angular.module('myApp')
.controller('loginCtrl',loginCtrl);