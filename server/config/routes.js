console.log('server routes')

var users = require('../controllers/users.js')
module.exports = function(app){
  app.post('/login', users.login);
  app.post('/register', users.register);
  app.post('/register', posts.create);
} 