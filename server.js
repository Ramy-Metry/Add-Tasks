const express=require('express')
const server=express();
const tasks=require('./router/tasks')


server.use(express.json());
server.use('/api',tasks)

server.use((err, req, res, next) => {
	res.status(500).json({ message: 'Server Error' });
});


module.exports=server;