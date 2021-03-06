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
            console.log('post get listing fired');
            console.log(req.body.zip)
            
            console.log(req.body.moveIn)
            console.log(req.body.moveOut)
            var newPrice = parseInt(req.body.price);
            if (req.body.moveIn == null && req.body.moveOut == null) {
                Post.find({zip:req.body.zip}, function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                });
            } else if (req.body.moveIn !== null && req.body.moveOut == null) {
                Post.find({$and:[{zip:req.body.zip}, {price: {"$lte": req.body.price}}, 
                    {movein: {"$gte": req.body.moveIn}}]}, function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                });
            } else if (req.body.moveIn == null && req.body.moveOut !== null) {
                Post.find({$and:[{zip:req.body.zip}, {price: {"$lte": req.body.price}}, 
                    {moveout: {"$gte": req.body.moveOut}}]}, function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                });
            } else {
                Post.find({$and:[{zip:req.body.zip}, {price: {"$lte": req.body.price}}, 
                    {movein: {"$gte": req.body.moveIn}}, {moveout: {"$gte": req.body.moveOut}}]}, 
                function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                })
            }
          }     
 }
 
module.exports = new PostsController();


