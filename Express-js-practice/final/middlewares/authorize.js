const authorizeMiddleware = (req,res,next) =>{
  const {user} = req.query;
  if(user == 'haris'){
      req.user = {name:'haris', id: 2}
      next();
  }
  else{
      res.status(401).send('Unauthorized');
  }
}

module.exports = authorizeMiddleware;