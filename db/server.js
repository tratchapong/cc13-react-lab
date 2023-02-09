const jsonServer =require('json-server')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))
// console.log(router.db.get('users').value())

const middlewares = jsonServer.defaults()

server.use(cors())
server.use(middlewares)
server.use(jsonServer.bodyParser)


server.post('/users', (req, res, next)=> {
  const {password} = req.body
  req.body.password = bcrypt.hashSync(password,10)
  next()
})

server.post('/login',  (req,res,next)=> {
  const {name, password} = req.body
  // find name in DB
  let rs = router.db.get('users').find({name}).value()
  if(!rs)
    // throw new Error('401::invalid login1')
    return res.status(401).json({msg : 'invalid login1'})
  // if found : compare password 
  let pw_match = bcrypt.compareSync(password, rs.password)
  // if matched then login
  if(!pw_match)
    // throw new Error('401::invalid login1')
    return res.status(401).json({msg: 'invalid login2'})
  let user = { id: rs.id, name: rs.name}
  return res.json({
    token : jwt.sign(user, 'Secret'),
    user : user
  })
})

function authenticate(req, res, next) {
  const authorization = req.headers.authorization
  if(!authorization || !authorization.startsWith('Bearer')) 
    return res.status(401).json({msg: 'Unauthorized 1'})
    const token = authorization.split(' ')[1]
  if(!token)
    return res.status(401).json({msg: 'Unauthorized 2'})
    const payload = jwt.verify(token, 'Secret')
    let user = router.db.get('users').find({id: payload.id}).value()
  if(!user)
    return res.status(401).json({msg: 'Unauthorized 3'})
  req.user = user
  next()
}

server.get('/me', authenticate, (req,res,next)=> {
  let {password, ...user} = req.user
  res.json(user)
})

server.use(router)

server.use( (err,req,res,next) => {
  console.log('*******ERR*****')
  console.log(err.message)
  let code = err.message.split('::')[0]
  return res.status(code || 500).json({err : err.message})
})

server.listen(8000, ()=> console.log('Server on 8000'))

