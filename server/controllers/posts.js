console.log('user server controller');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post')

function PostsController(){

	this.create = function(req,res){
		console.log('create posts server controller function fired', req.body);
                	
                var user_id = req.body.user_id
                delete req.body.user_id
           
                User.findOne({_id:user_id}, function(err,user){
                	console.log(user, 'user found')
                	req.body._user = user_id;
                	Post.create(req.body, function(err, post){
                		if(err){
                			console.log(err)
                			return
                		}
                		console.log('post created',post)
                		user._post.push(post)
                		console.log('pushed post to user', user)
                		user.save(function(err){
                			if(err){
                				console.log(err)
                				return
                			}
                			console.log('user saved', user)
                			res.json(post)
                		})
                	})
       })
     }

    this.getListings = function(req,res){
            if (req.body.moveIn == null && req.body.moveOut == null) {
                Post.find({zip:req.body.zip});
            } else if (req.body.moveIn !== null && req.body.moveOut == null) {
                
            }

	 }

}
	
 module.exports = new PostsController();

