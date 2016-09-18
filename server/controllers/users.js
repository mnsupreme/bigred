console.log('user server controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post')

function UsersController(){

	this.login = function(req,res){
		console.log('login server controller function fired')
		User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
			if(err || user == null){
				console.log(err)
				return
			}
			console.log(user)
			res.json(user);
		})

	}

	this.register = function(req,res){
		console.log('register server controller function fired!')
		User.create({username: req.body.username, password: req.body.password}, function(err, user){
			if(err){
				console.log(err)
				return
			}

			console.log(user)
			return
		})
	}

  
  
}
module.exports = new UsersController();