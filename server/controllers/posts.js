console.log('user server controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post')

function PostsController(){

	this.create = function(req,res){
		console.log('posts server controller function fired');
                var residents = req.body.residents;	
                req.body.residents = null;
                var post = new Post(req.body);
                req.body.residents = residents;
                post.save(function(err, user){
			if(err){
				console.log(err)
				return
			}
			res.json(user);
		})
	}
 };