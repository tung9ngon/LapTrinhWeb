const express = require('express')
const app = express()
const port = 3001
const todosRouter = require('./src/routers/todos');
app.use(express.json());
app.get('/',(req, res)=>{
    res.send('Hello world')
})
app.use('/todos', todosRouter);
app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`)
})