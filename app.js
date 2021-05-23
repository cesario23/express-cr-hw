const express = require ('express');
const logger = require ("morgan");
const app = express();

const indexRouter = require('./router/indexRouter');
const todoRouter = require ('./router/todoRouter')
app.use (logger('dev'));
app.use (express.json());

app.use ('/', indexRouter);
app.use ("/api/todo", todoRouter)

app.listen (3000, function(){
    console.log (`Server started at PORT ${3000}`)
});