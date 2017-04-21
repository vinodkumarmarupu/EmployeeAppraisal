var mongoose=require('mongoose');

var employeeschema= new mongoose.Schema({
	
	"_id":{
		type:String
	},
	"fname":{
		type:String
	},
	"lname":{
		type:String
	},
	"password":{
		type:String
	},
	"phonenumber":{
		type:String
	},
	"designation":{
		type:String
	},
	"tlname":{
		type:String
	},
	"tlmail":{
		type:String
	},
	"mgrname":{
		type:String
	},
	"mgrmail":{
		type:String
	},
	"hrname":{
		type:String
	},
	"hrmail":{
		type:String
	},
	"role":{
		type:String
	},
	"status":{
		type:String
	},
	"date":{
		type:String
	},
	"HRAparisalStatus":{
		type:String
	},
	"empAparisalStatus":{
		type:String
	}
	
});
module.exports=mongoose.model("employeeProfiles",employeeschema);
