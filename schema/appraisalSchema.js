var mongoose=require('mongoose');
/* mongoose.connect('mongodb://localhost:27017/AppraisalDB',function(err){
	
	if(err){
		
		console.log("DB Error"+err)
	}else{
	console.log("connected")
	}
}); */
var appraisalschema= new mongoose.Schema({

	"_id":{
		type:String
	},
	"name":{
		type:String
	},
	"designation":{
		type:String
	},
	"month":{
		type:String
	},
	"TimeInPosition":{
		type:String
	},
	"TrainingDetails":{
		type:String
	},
	"Projects":{
		type:[{}]
	},
	"responsibilities":{
		type:String
	},
	"difficultyInterest":{
		type:String
	},
	"achievements":{
		type:[{}]
	},
	"EmpSubmitted":{
		type:String
	},
	"TLname":{
		type:String
	},
	"TLemail":{
		type:String
	},
	"TLcomment":{
		type:String
	},
	"TLrating":{
		type:String
	},
	"TLSubmitted":{
		type:String
	},	
	"managerName":{
		type:String
	},
	"managerEmail":{
		type:String
	},
	"managerComment":{
		type:String
	},
	"managerRating":{
		type:String
	},
	"managerSubmitted":{
		type:String
	},	
	"HRname":{
		type:String
	},
	"HRemail":{
		type:String
	},
	"HRcomment":{
		type:String
	},
	"HRrating":{
		type:String
	},
	"HRSubmitted":{
		type:String
	},	
	"status":{
		type:String
	}
	
	
});
module.exports=mongoose.model("appraisalForm",appraisalschema);