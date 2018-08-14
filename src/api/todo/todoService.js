const Todo = require('./todo')


Todo.methods(['get', 'post', 'put' , 'delete'])
Todo.updateOptions({ new: true, runValidators: true})

Todo.route('res', function(req, res, next) {
   console.log(req.body)
   res.send('I have a recommendation for you!');
});
/*
Todo.before('delete', (req, res, next) => {
   if(req.body.pass === '123') {
      next()
      res.send('DELETED')
   }
   else {
      res.send('YOU CANT DO THAT')
   }
})


*/
module.exports = Todo