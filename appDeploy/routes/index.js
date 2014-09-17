
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};


exports.home = function(req, res){
	res.render('home');
};

exports.resources = function(req, res){
	res.render('resources');
}


exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};