
// 1.import json server-(library)
const jsonServer = require('json-server')

//2.create path for database.json file using router fn for storiing data
const router = jsonServer.router('database.json')

//3.create middleware to convert json to js =defaults()
 const middleware = jsonServer.defaults()

 //4. create json server
 const mediaPlayerServer = jsonServer.create()

 //5. server should use router and middleware
 mediaPlayerServer.use(middleware)
 mediaPlayerServer.use(router)

 //6.set port for server
 const PORT = 3000 || process.env.PORT
 


 //7.run server
 mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
 })