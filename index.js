var express = require('express'); //requiring express library
var app = express();
var db=require('./schema/empSchema.js');
var db1=require('./schema/appraisalSchema.js');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
app.use(express.static(__dirname+'/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


mongoose.connect('mongodb://172.17.13.222:27017/AppraisalDB',function(err){
	if(err){
		console.log("DB Error"+err);
	}else{
    	console.log("connected");
	}
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose connection opened ');
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose connection got error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose disconnected got disconnected'); 
});



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



var loginProfile=function(json1,callback){
	db.find(json1,function(err,data){
		if(err){
			  var errjson={
				"error":"Check your connection"
			       }
			   console.log("err"+err);
			   callback(err);
		}else {
			if(data==""){
				var datajson1={
					"success":"Check your credentials"
				}
				callback(datajson1);
			}else{
				console.log("data"+JSON.stringify(data))
			var datajson={
			"_id":data[0]._id,
			"fname":data[0].fname,
			"lname":data[0].lname,
			"role":data[0].role,
			"designation":data[0].designation,
			"phonenumber":data[0].phonenumber
			}
			console.log(JSON.stringify(datajson))
			callback(datajson);
			}
			
		}
	});
};
var UpdateField=module.exports=function(updateProfilejson1,updateProfilejson2,callback){
db.findOneAndUpdate(updateProfilejson1,updateProfilejson2,function(err,data){
	
	if(err){
			   var errjson1={
				   "error":"failed"
			   }
			callback(errjson1);
		}else{
			console.log(JSON.stringify(data));
		 callback(data);
		}
	
})
};
var createProfile=function(empData,callback){
db.create(empData,function(err,data){
		if(err){
			console.log(err);
			var regerr={
				"error":"error"
			}
			callback(regerr);
		}else{
			console.log(JSON.stringify(data));
			callback(data);
		}
	});
};
/*Second schema CRUD methods*/
var createForm=function(appraisalJSON,callback){
db1.create(appraisalJSON,function(err,data){
		if(err){
			var regerr={
				"error":"Check your credentials"
			}
			callback(regerr);
		}else{
			console.log(JSON.stringify(data));
			callback(data);
		}
	})
};
/*Register an employee*/
app.post('/empRegistrationApi',function(req,res){
	console.log(JSON.stringify(req.body));
	var empData={
		"_id":req.body.email,
		"fname":req.body.fname,
		"lname":req.body.lname,
		"password":req.body.password,
		"designation":req.body.desig,
		"phonenumber":req.body.phone,
		"role":req.body.role,
		"status":req.body.status,
		"HRAparisalStatus":req.body.HRAparisalStatus,
		"empAparisalStatus":req.body.empAparisalStatus
	}
	
	console.log(JSON.stringify(empData));
	createProfile(empData,function(createData){
		res.json(createData);
	})
});
/*Update the fields*/
app.post('/empUpdateProfile',function(req,res){
	//console.log(JSON.stringify(req.body));
	var updateProfilejson1={
		"_id":req.body._id
	}

	 var updateProfilejson2=req.body;
    console.log(JSON.stringify(updateProfilejson2));
	
     UpdateField(updateProfilejson1,updateProfilejson2,function(responseData){
		 
          	res.send(responseData);

	 })
});
/*Login*/
app.get('/loginApi',function(req,res){
	var json1={
		"_id":req.query.email,
		"password":req.query.password
	}
	console.log(JSON.stringify(json1));
	loginProfile(json1,function(loginData){
		res.json(loginData);
	})
	
});

/*Employee List get of fields*/
app.get('/empListApi',function(req,res){
	

	//console.log(JSON.stringify(empData));
	db.find({},function(err,data){
		if(err){
			var errjson={
				"error":"Check your connection"
			}
			res.json(errjson);
		}else{
			console.log(JSON.stringify(data));
		
			res.json(data);
		}
	});
});


/*Employee List get of fields*/
app.post('/empListApi',function(req,res){

	//console.log(JSON.stringify(empData));
	db.find(req.body,function(err,data){
		if(err){
			var errjson={
				"error":"Check your connection"
			}
			res.json(errjson);
		}else{
			console.log(JSON.stringify(data));
		
			res.json(data);
		}
	});
});



/*getEmployeeById function to get apprisal list */

var getEmployeeById=function(json1,callback){
	db.find(json1,function(err,data){
		if(err){
			  var errjson={
				"error":"Check your connection"
			       }
			   console.log("err"+err);
			   callback(errjson);
		}else {
			if(data==""){
				var datajson1={
					"success":"noting was found"
				}
				callback(datajson1);
			}else{
				console.log("data"+JSON.stringify(data))
			callback(data);
			}
			
		}
	});
};


//get employee Based on Id
app.get('/getEmpBasedOnId',function(req,res){
	
	/* var apprisalId={
			"_id":req.query.id
	} */
	
	var apprisalId=req.query;
	console.log(JSON.stringify(req.query));
	getEmployeeById(apprisalId,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})



/*getApprisalEmployeeById function to get apprisal for a particular Employee */

var getApprisalEmployeeById=function(json1,callback){
	db1.find(json1,function(err,data){
		if(err){
			  var errjson={
				"error":"Check your connection"
			       }
			   console.log("err"+err);
			   callback(errjson);
		}else {
			if(data==""){
				var datajson1={
					"success":"noting was found"
				}
				callback(datajson1);
			}else{
				console.log("data"+JSON.stringify(data))
			callback(data);
			}
			
		}
	});
};


//get employee Based on Id
app.get('/getEmpApprisalBasedOnId',function(req,res){
	
	var apprisalId=req.query;
	console.log(JSON.stringify(req.query));
	getApprisalEmployeeById(apprisalId,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})



/*getTLnames function to get apprisal list */

var getTls=function(json1,callback){
	
	db.find(json1,function(err,data){
		if(err){
			  var errjson={
				"error":"Check your connection"
			       }
			   console.log("err"+err);
			   callback(errjson);
		}else {
			if(data==""){
				var datajson1={
					"success":"noting was found"
				}
				callback(datajson1);
			}else{
				console.log("data"+JSON.stringify(data))
			callback(data);
			}
			
		}
	});
};


//get employee Based on Id
app.get('/getEmpBasedOnTlId',function(req,res){
	
	var apprisalId=req.query;
	console.log(JSON.stringify(req.query));
		
	var query= {
    $and : [
        { $and : [{"mgrmail":req.query.mgrmail},{"role":req.query.role}]}
    ]
    }
	
	getTls(query,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})





/*Appraisal form Data*/
app.post('/appraisalFormApi', function(req,res){
	console.log(JSON.stringify(req.body));
	var appraisalJSON={
		"_id":req.body.email,
		"name":req.body.name,
		"designation":req.body.designation,
		"month":req.body.month,
		"TimeInPosition":req.body.timeInposition,
		"TrainingDetails":req.body.trDetails,
		"Projects":req.body.projects,
		"responsibilities":req.body.responsibilities,
		"difficultyInterest":req.body.dfInterest,
		"achievements":req.body.achievements,
		"TLname":req.body.tlname,
		"TLemail":req.body.tlemail,
		"managerName":req.body.mgrname,
		"managerEmail":req.body.manageremail,
		"HRname":req.body.hrname,
		"HRemail":req.body.hremail,
		"status":req.body.status,
		"EmpSubmitted":req.body.empsubmitted
    }
	console.log(JSON.stringify(appraisalJSON));
	createForm(appraisalJSON,function(form){
		res.json(form);
	})
})

app.post('/updateappraisalFormApi', function(req,res){
	console.log(JSON.stringify(req.body));
	var appraisalJSON={
		"_id":req.body.email
    }
	var updateform=req.body
	
	console.log(JSON.stringify(appraisalJSON));
	updateApprisalById(appraisalJSON,updateform,function(form){
		res.json(form);
	})
})



/*Employee List of fields*/
app.get('/getAllapprisalsListApi',function(req,res){
	
	//console.log(JSON.stringify(empData));
	db1.find({},function(err,data){
		if(err){
			var errjson={
				"error":"Check your connection"
			}
			res.json(errjson);
		}else{
			console.log(JSON.stringify(data));
		
			res.json(data);
		}
	});
});


/*getApprisalListById function to get apprisal list */

var getApprisalListById=function(json1,callback){
	db1.find(json1,function(err,data){
		if(err){
			  var errjson={
				"error":"Check your connection"
			       }
			   console.log("err"+err);
			   callback(err);
		}else {
			console.log(data);
			if(data==""){
				var datajson1={
					"success":"noting was found"
				}
				callback(datajson1);
			}else{
				console.log("data"+JSON.stringify(data))
			/* var datajson={
			"_id":data[0]._id,
			"email":data[0].email,
			"name":data[0].name,
			"TimeInPosition":data[0].TimeInPosition
			
			} */
			//console.log(JSON.stringify(datajson))
			callback(data);
			}
			
		}
	});
};


//get apprisal Based on TeamLead Email
app.get('/getApprisalBasedOnTlId',function(req,res){
	
	var apprisalEmail={
		"TLemail":req.query.email
	}
	
	getApprisalListById(apprisalEmail,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})

//get apprisal Based on Manager Email
app.post('/getApprisalBasedOnManagerId',function(req,res){
	
	var apprisalEmail={
			"managerEmail":req.body.email
	}
	
	getApprisalListById(apprisalEmail,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})

//get apprisal Based on HR Email
app.post('/getApprisalBasedOnHRId',function(req,res){
	
	var apprisalEmail={
			"HRemail":req.body.email
	}
	
	getApprisalListById(apprisalEmail,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})

//get apprisal Based on Id
app.post('/getApprisalBasedOnId',function(req,res){
	
	var apprisalId=req.body;
	console.log(JSON.stringify(apprisalId));
	
	getApprisalListById(apprisalId,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})

//Get Apprisal List

app.post('/editAppraisalList', function(req,res){
	
var apprisalId=req.body;
	
	getApprisalListById(apprisalId,function(apprisalData){
		res.json(apprisalData);
		
	});
	
})

//This is updateApprisalById function implementation, This function is used for updating the apprisal by TL,Manager or HR
var updateApprisalById=module.exports=function(updateProfilejson1,updateProfilejson2,callback){
db1.findOneAndUpdate(updateProfilejson1,updateProfilejson2,function(err,data){
	
	if(err){
			   var errjson1={
				   "error":"error"
			   }
			callback(errjson1);
		}else{
			console.log(JSON.stringify(data));
		 callback(data);
		}
	
})
};
var createApprisal=module.exports=function(updateProfilejson1,callback){
db1.create(updateProfilejson1,function(err,data){
	
	if(err){
			   var errjson1={
				   "error":"error"
			   }
			callback(errjson1);
		}else{
			console.log(JSON.stringify(data));
		 callback(data);
		}
	
})
};






/* //update apprisal by TeamLead
app.post('/updateApprisalByTL',function(req,res){
	
	var apprisalId={
		"_id":req.body.id
	}
	
	var updateTLCommentsjson={
		"status":"1",
		"TLcomment":req.body.tlcomments,
		"TLrating":req.body.tlrating
		
	}
console.log(JSON.stringify(updateTLCommentsjson));
	updateApprisalById(apprisalId,updateTLCommentsjson,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})

//update apprisal by manager
app.post('/updateApprisalByManager',function(req,res){
	
	var apprisalId={
		"_id":req.body.id
	}
	
	var updateManagerCommentsjson={
		"status":"2",
		"managerComment":req.body.managercomments,
		"managerRating":req.body.managerrating
		
	}
    console.log(JSON.stringify(updateManagerCommentsjson));
	updateApprisalById(apprisalId,updateManagerCommentsjson,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
}) */

//Create apprisal by Employee
app.post('/createApprisalForm',function(req,res){
	
	
	/*var apprisalId={
		"_id":req.body._id
	}*/
	
	updateCommentsjson=req.body;
	
	
    //console.log(JSON.stringify(updateHRCommentsjson));
	createApprisal(updateCommentsjson,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})
app.post('/updateApprisal',function(req,res){
	
	
	var apprisalId={
		"_id":req.body._id
	}
	
	updateCommentsjson=req.body;
	
	
    //console.log(JSON.stringify(updateHRCommentsjson));
	updateApprisalById(apprisalId,updateCommentsjson,function(apprisalData){
		res.json(apprisalData);
		
	});
	
	
})

//get Staus function
var getApprisalCollectionStatus=module.exports=function(JSONdata,callback){
db1.find(JSONdata,function(err,data){
	
	callback(err,data);
	
})
};


//get Staus function
var getEmployeeCollectionStatus=module.exports=function(JSONdata,callback){
db.find(JSONdata,function(err,data){
	
	if(err){
			   var errjson1={
				   "error":"error"
			   }
			callback(errjson1);
		}else{
			console.log(JSON.stringify(data));
		// callback(data);
		   console.log("getEmployeeCollectionStatus"+data[0]._id);
		
		
		var JSON2={
			"_id":data[0]._id
			
		}
		
		getApprisalCollectionStatus(JSON2,function(err,data){
			console.log(JSON.stringify(err));
					if(err){
					   var errjson1={
						   "error1":"error"
					   }
						callback(errjson1);
					}else{
						console.log(JSON.stringify(data));
						callback(data);
						
						
					}
			
		})
		 
		 
		 
		}
	
})
};

app.post('/getApprisalFormStatus',function(req,res){
	var JSONdata={
		
		"_id":req.body._id
		
	};
	
	getEmployeeCollectionStatus(JSONdata,function(status){
		res.send(status);
		
	})
	
	
})



/*Rendering to HTML pages */
app.get('/login',function(req,res){
	res.sendFile(__dirname+'/public/login.html');
});
app.get('/EMPhome',function(req,res){
	res.sendFile(__dirname+'/public/indexemp.html');
});
app.get('/HRhome',function(req,res){
	res.sendFile(__dirname+'/public/indexhr.html');
});
app.get('/TLhome',function(req,res){
	res.sendFile(__dirname+'/public/indextl.html');
});
app.get('/MGRhome',function(req,res){
	res.sendFile(__dirname+'/public/indexmanager.html');
});
app.get('/empRegistration',function(req,res){
	res.sendFile(__dirname+'/public/registration.html');
});
app.get('/updateProfile',function(req,res){
	res.sendFile(__dirname+'/public/updateProfile.html');
});
app.get('/updateProfileByHr',function(req,res){
	res.sendFile(__dirname+'/public/updateProfileByHr.html');
});

app.get('/pendingEmployeeListhr',function(req,res){
	res.sendFile(__dirname+'/public/pendingEmployeeListhr.html');
});

app.get('/requestingAppraisalListhr',function(req,res){
	res.sendFile(__dirname+'/public/requestingAppraisalListHR.html');
});
app.get('/appraisalFormtl',function(req,res){
	res.sendFile(__dirname+'/public/appraisalFormtl.html');
});
app.get('/appraisalFormMGR',function(req,res){
	res.sendFile(__dirname+'/public/appraisalFormMGR.html');
});
app.get('/appraisalFormhr',function(req,res){
	res.sendFile(__dirname+'/public/appraisalFormhr.html');
});
app.get('/empList',function(req,res){
	res.sendFile(__dirname+'/public/empListView.html');
});
app.get('/empListHr',function(req,res){
	res.sendFile(__dirname+'/public/empListViewForHr.html');
});
app.get('/empListTl',function(req,res){
	res.sendFile(__dirname+'/public/empListViewForTl.html');
});
app.get('/empListManager',function(req,res){
	res.sendFile(__dirname+'/public/empListViewForManager.html');
});
app.get('/appraisalForm',function(req,res){
	res.sendFile(__dirname+'/public/appraisalForm.html');
});
app.get('/appraisalListView',function(req,res){
	res.sendFile(__dirname+'/public/apprisallistview.html');
});

app.get('/appraisalUpdateByTl',function(req,res){
	res.sendFile(__dirname+'/public/appraisalUpdateByTl.html');
});
app.get('/appraisalUpdateByHr',function(req,res){
	res.sendFile(__dirname+'/public/appraisalUpdateByHr.html');
});
app.get('/appraisalUpdateByManager',function(req,res){
	res.sendFile(__dirname+'/public/appraisalUpdateByManager.html');
});
app.get('/appraisalListViewByTl',function(req,res){
	res.sendFile(__dirname+'/public/appraisalListViewByTl.html');
});
app.get('/appraisalListViewByHr',function(req,res){
	res.sendFile(__dirname+'/public/appraisalListViewByHr.html');
});
app.get('/appraisalListViewByManager',function(req,res){
	res.sendFile(__dirname+'/public/appraisalListViewByManager.html');
});
app.listen(3000);
console.log("running on port 3000");