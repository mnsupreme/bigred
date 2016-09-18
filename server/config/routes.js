console.log('server routes')

var users = require('../controllers/users.js')
var posts = require('../controllers/posts.js')
module.exports = function(app){
  app.post('/login', users.login);
  app.post('/register', users.register);
<<<<<<< HEAD
  app.post('/new', posts.create);
=======
  app.post('/create', posts.create);
>>>>>>> origin/master
} 