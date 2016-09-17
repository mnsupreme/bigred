
//getTime
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var hour = today.getHours()+1;//Hours are from 0 to 23!
var minutes = today.getMinutes();
var ampm;

  function getTime(){

  var date;

  if(mm<10) {
      mm='0'+mm
  } 

  if(hour>12){
    hour=2%hour
    ampm='pm'
  }
  else{
    ampm ='am'
  }

  date = mm+'/'+dd+'/'+yyyy+' '+hour+' :'+minutes+' '+ampm;
  return date;
}

//angular controller
app.controller('ControllerNames(plural-capital naming convention)', ['$scope', 'someFactory',  '$routeParams', '$localStorage', '$location', function($scope, someFactory,  $routeParams, $localStorage, $location){
  }])

//angular controller function
$scope.variable = function(){
  console.log(' controller function fired')
}


//angular factory
app.factory('defaultFactory (camel case singular)', ['$http', function($http){
  console.log(" factory loaded!");
  var factory={};  
  return factory
}])


//angular factory function
factory.function = function(passin, callback){
    console.log(' factory function fired')

    }

//get
$http.get('/route').then(callback)


//post
$http.post('/route', passin).then(callback) 

//console.log
console.log()

//mean child
_association_children:[{type: Schema.Types.ObjectId, ref: 'name_of_foreighn_model'}]//one to many where this is the many

//mean function 
this.function = function(req,res){
  console.log(' server controller function fired')
}


//mean parent
_association_parent: {type: Schema.Types.ObjectId, ref: 'name_of_foreighn_model'},//one to many where this is the one

//mean model
console.log(' server model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenericSchema = new mongoose.Schema({
  }, {timestamps: true  });
var name_of_model = mongoose.model('name_of_model', GenericSchema);

//mean validate
{
validate:{ //make this an array of objects for multiple validation objects
      validator: function( value ){
        //validation function goes here
      },
    message:'failure message goes here'
    }
 },

 //mean populate
 this.populate = function(req,res){
   Model.find({_id: req.params.id }).populate('name of field you want to populate').exec(function(err, results){
     if(err){
       console.log(err)
       return
     res.json(results)
   }
   })
 }

 //mean search
 this.search = function(req,res){
     Model.find({text:{$regex:req.body.text /* (returns results containing the entered string) */, : 'i'}}).exec(function (err, results){
       if(err){
         console.log('no matches')
         return       
       res.json(results)
     }
     })
   }

//mean controller
console.log(' server controller');
var mongoose = require('mongoose');
var name_of_model = mongoose.model('name_of_model');
function PluralNamingConventionPascalCase(){ 
}
module.exports = new PluralNamingConventionPascalCase();


//Other useful code

// angular sort by creation newest to olderst<ng-repeat='' | orderBy:'created_at':true>


this.orderByDate = function(req,res){
  Model.find({}).sort('date'/* use -date for oldest to newest */).exec(function(err, results){
    if(err){
      console.log(err)
      return
    }

    res.json(results)
  })
}
