console.log('server routes')

var users = require('../controllers/users.js')
var posts = require('../controllers/posts.js')
module.exports = function(app){
  app.post('/login', users.login);
  app.post('/register', users.register);
  app.post('/search', posts.getListings);
  app.post('/new', posts.create);

} 