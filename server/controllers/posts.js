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
         
        this.getListings = function(req,res){
            if (req.body.moveIn == null && req.body.moveOut == null) {
                Post.find({zip:req.body.zip, price: {$lt: req.body.price}}, function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                });
            } else if (req.body.moveIn !== null && req.body.moveOut == null) {
                Post.find({zip:req.body.zip, price: {$lt: req.body.price}, 
                    moveIn: {$lt: req.body.moveIn}}, function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                });
            } else if (req.body.moveIn == null && req.body.moveOut !== null) {
                Post.find({zip:req.body.zip, price: {$lt: req.body.price}, 
                    moveOut: {$gt: req.body.moveIn}}, function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                });
            } else {
                Post.find({zip:req.body.zip, price: {$lt: req.body.price}, 
                    moveIn: {$lt: req.body.moveIn}, moveOut: {$gt: req.body.moveIn}}, 
                function(err, listings){
                    if (err){
                        console.log(err);
                        return;
                    }
                    console.log(listings);
                    res.json(listings);
                })
            };
        };       
 };
 
module.exports = new PostsController();

