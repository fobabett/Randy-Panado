var express = require('express');
var app = express();
// var _ = require('lodash');
var articles = require('./articles');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(express.static('./build')); // angulpify's static <--- this is breaking and giving the unexpected syntax error B error..? or just not rendering
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/articles', function(req, res){
  res.json(articles);
});

app.get('/articles/:id', function(req,res) {
  var id = parseInt(req.params.id);
  var res_articles = articles.filter(function(article) {
    return article.id === id;
  }).map(function(article) {
    return article;
  })

  if(res_articles.length > 0){
    res.json( res_articles[0] );
  }else{
    res.status(404).json( { success: false, message: "Order with id:"+id+" does not exist." } );
  }
  
});

app.get('/articles/category/:category', function(req, res){
  res.json( articles.filter(function(article){
    return article.category.some(function(category){
      return category.name.toLowerCase() === req.params.category.toLowerCase();
    });
  }));
});


app.listen(port, function(){
  process.stdout.write("[LOADED] Server listening at http://localhost:"+port+"\n\n");
});

module.exports = app;
