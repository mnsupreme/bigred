# MEAN_templates
some templates for MVC mean

#install dependencies (in command line)
npm install
bower install

#install snippets
download snippets (sublime-snippets.zip or sublime snippets folder)
put files in your User package

#for mac: user_profile-->library-->application support-->sublime text 2-->Packages-->User

#IMPORTANT NOTES

1. snippets.js and snippets.html are not sublime snippets. They just contain the content on what's in the snippets
2. Certain spaces and comments were deleted in snippets.js for readability purposes. The code in snippets.js doesn't completely match the code in the actual snippet
3. While sublime will auto-suggest snippets to you while you type out the keyword (tabTrigger), it wont do this for html snippets. You must type out the full keyword and press tab in order for it to work
4. to see which file a snippet belong to, simply start typing out the keyword (tabTrigger) of the snippet and it will start to suggest you snippets on the right side of the snippet suggestion bar that show up, the filename of where the snippet is stored will appear
5. to run your MEAN stack project simply run node server.js or nodemon server.js in your terminal while in the project folder. Using nodemon option is easier because it restarts every time you change a file and save.


#HOW TO USE SNIPPETS

1. type out the keyword (tabTrigger) and press tab
2. some snippets come with fill-in assist. Press tab multiple times once the snippet appears to navigate different parts of the snippets you want to fill in. DO NOT move your cursor away from the snippet once it appears or fill-in assist won't work

#Snippet library (typing these in sublime will do the following):

#angular controller

code:  
app.controller('ControllerNames(plural-capital naming convention)', ['$scope', 'someFactory',  '$routeParams', '$localStorage', '$location', function($scope, someFactory,  $routeParams, $localStorage, $location){
    
  }])

description: creates a new angular controller witb auto fill ins
supported file types: .js
where to find: Angular_controller.sublime-snippet

#angular controller function
code: 
$scope.variable = function(){
  console.log(' controller function fired')
}

description: creates a new angular controller function to be put in an angular controller
supported filetype: .js
where to find: Angular_controller_function.sublime-snippet

#angular factory
code: 
app.factory('defaultFactory (camel case singular)', ['$http', function($http){
  console.log(" factory loaded!");
  var factory={};
  
    
  return factory
}])

description: creates a new factory for angular
supported filetype: .js
where to find: Angular_factory.sublime-snippet

#angular factory function
code:
factory.function = function(passin, callback){
    console.log(' factory function fired')

    }

description:creates a new angular factory function
supported filetype: .js
where to find: Angular_factory_function.sublime-snippet 


#get
code: $http.get('/route').then(callback)
description: creates a new angular factory get handler
supported filetype: .js
where to find: Angular_factory_http_get.sublime-snippet

#post
code: $http.post('/route', passin).then(callback)
description: creates a new angular controller post handler
supported fuletype: .js
where to find: Angular_factory_http_post.sublime-snippet

#console.log
code: console.log()
description: creates a console.log statement to be filled in
where to find: console_log.sublime-snippet

#getTime
code:
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
description: creates a function to formate time and date 
supported filetypes: .js, .html
where to find: getTime.sublime-snippet

#mean model
code:
console.log(' server model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// build your friend schema and add it to the mongoose.models
var GenericSchema = new mongoose.Schema({
  

}, {timestamps: true  });
// register the schema as a model
var name_of_model = mongoose.model('name_of_model', GenericSchema);

description: creates a new MEAN generic schema to be filled in and added to mongoose models
supported filetype: .js
where to find: MEAN_mongoose_model.sublime-snippet

#mean controller
code: console.log(' server controller');
var mongoose = require('mongoose');
var name_of_model = mongoose.model('name_of_model');

function PluralNamingConventionPascalCase(){

  
  
}
module.exports = new PluralNamingConventionPascalCase();

description: creates a new server side controller to be filled in
supported filetype: .js
where to find: MEAN_server_controller.sublime-snippet

#mean function
code: 
this.function = function(req,res){
  console.log(' server controller function fired')
}

description: creates a new function to be added to a server side controller
supported filetype: .js
where to find: MEAN_function_server_controller.sublime-snippet

#mean parent
code:
 _association_parent: {type: Schema.Types.ObjectId, ref: 'name_of_foreighn_model'},//one to many where this is the one

 description: creates a new parent association to be added to a mongoose model
 supported filetype: .js
 where to find: MEAN_mongoose_association_parent.sublime-snippet

 #mean child
 code:
 _association_children:[{type: Schema.Types.ObjectId, ref: 'name_of_foreighn_model'}]//one to many where this is the many

 description: creates a new mean child association to be added to a mongoose model
 spported filetype: .js
 where to find: MEAN_mongoose_association_child.sublime-snippet

 #mean validate
 code:
 {
validate:{ //make this an array of objects for multiple validation objects
      validator: function( value ){
        //validation function goes here
        
      },
    message:'failure message goes here'
    }
 },
 description: creates a validation object to be added to a mongoose schema
 supported filetype: .js
where to find: MEAN_mongoose_validation.sublime-snippet

 #mean search
 code:
 this.search = function(req,res){
    Model.find({text:{$regex:req.body.text /* (returns results containing the entered string) */, : 'i'}}).exec(function (err, results){
      if(err){
        console.log('no matches')
        return
      
      res.json(results)
    }
    })
  }

  description: creates a search function to be added to a server side controller
  supported filetype: .js
  where to find: MEAN_search_server_controller.sublime-snippet

  #mean populate
  code:
  his.populate = function(req,res){
  Model.find({_id: req.params.id }).populate('name of field you want to populate').exec(function(err, results){
    if(err){
      console.log(err)
      return
    

    res.json(results)
  }

  })

}

description: creates a function that returns a query particular record and its associated records from another instance of a model
supported filetype: .js
where to find: MEAN_populate_server_controller.sublime-snippet

#myform
code:
<form method='' action='' input 1>
	input 1<input type='text'>
	input 2<input type='text'>
	<button type='submit'><input type='text'></button>
</form>

description: creates a form with two inputs and a button of type submit
supported filetype: .html
where to find: form_html.sublime-snippet

#mybutton
code: <button type='submit'>submit</button>

description: create a button of type submit
supported filetype: .html
where to find: button_html.sublime-snippet

#mytable
code:
<table>
	<thead>
		<td><td>
	<thead>
	<tr>
		<td></td>
		<td></td>
	</tr>
</table>

description: creates a table with a table head and one two-column row
supported filetype: .html
where to find: html_table.sublime-snippet

#mytextarea
code:
<textarea rows='4' cols='50'></textarea>

description: creates a text area four rows long and fifty columns wide
supported filetype: .html
where to find: textarea_html.sublime-snippet





