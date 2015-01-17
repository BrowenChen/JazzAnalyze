
/*
 * GET home page.
 */


var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');


exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};



exports.getPosts = function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }
    res.json(posts);
  });
};


exports.post = function(req, res, next) {
  var post = new Post(req.body);
  post.save(function(err, post){
    if(err){ return next(err); }
    res.json(post);
  });
};

//function queries postId in database. 
exports.preLoad = function(req, res, next, id){
	var query = Post.findById(id);
	query.exec(function(err, post){
		if(err){return next(err)};
		if(!post){return next(new Error('Cannot find post'))};

		req.post = post;
		return next();
	});
};

//Middleware preLoad function attaches the post from MongoDB to req. Return the req.post
exports.getSinglePost = function(req, res){
	res.json(req.post)
};