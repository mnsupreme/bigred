console.log('user server controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post')

function UsersController(){

	this.login = function(req,res){
		console.log('login server controller function fired')
		
	}

  
  
}
module.exports = new UsersController();