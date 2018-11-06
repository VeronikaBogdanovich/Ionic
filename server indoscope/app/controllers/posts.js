var Post = require('../models/Post');

exports.getPosts = function(req, res, next){
    Post.find(function(err, todos) {
        if (err){
            res.send(err);
        }
        res.json(todos);
    });
};


exports.getPostsByUsername = function(req,res,next){
    var username = req.params.username;
   // console.log(req.body + " " + username + " this is server console log");
    Post.find({username:username},function (err,posts) {
        //console.log(posts);
        if(err){
            res.send(err);
        }
        res.json(posts);
    })

};


exports.createPost = function(req, res, next){
    Post.create({
        username:    req.body.username,
        description: req.body.description,
        date:        req.body.date,
        time:        req.body.time,
        duration:    req.body.duration,
        price:       req.body.price,
        priceRun:    req.body.priceRun
    }, function(err, todo) {

        if (err){
            res.send(err);
        }
        Post.find(function(err, todos) {
            if (err){
                res.send(err);
            }
            res.json(todos);
        });
    });
};

exports.deletePost = function(req, res, next){
  var ObjectId = require('mongodb').ObjectId;
  var id = req.params.post_id;
  var o_id = new ObjectId(id);
    Post.remove({
        _id : o_id
    }, function(err, todo) {
        res.json(todo);
    });

};
