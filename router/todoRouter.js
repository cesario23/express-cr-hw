const express = require ("express");
const router = express.Router();
const  uuidv4 = require ('uuid').v4;

let todos = [
    {
    id: "haf24jd",
    todo: "do laundry",
    done: "false"
    },
    {
    id: "jp2nkl2",
    todo: "wash dishes",
    done: "true"
    }
    ];

    router.get ("/get-all-todos", function (req, res){
        res.json({data: todos})
    })
    router.get ("/get-todo-by-id/:id", function (req, res){
     const id = req.params.id;
     let isIdFound;
     todos.forEach ((item)=>{
         if(todo.id /= id){
             isIdFound = item;
         }
     })
     if (!isIdFound){
         res.json ({message: "The todo ID you are looking for does note exists, please check ID"})
     }else{
         res.json ({isIDFound});
     }
    })
    router.get ("/get-todos-by-done/:done", function(req, res){
     const {done} = req.params;
     let isTodoDone;
     todos.forEach ((item)=> {
         if (todos.done === done){
            isTodoDone = item;
         }
     })
    if (!isTodoDone){
        res.json ({message: "you need to enter either true or false if the todo is done."})
    }else {
        res.json ({isTodoDone});
    }
    })

    router.post("/create-new-todo", function (req, res){
    let newTodos = {
        id : uuidv4 (),
        todo : req.body.todo,
        done : "false"
    }
    let todoExits;
    todos.forEach ((item)=>{
        if (newTodos.todo === item.todo){
            todoExits = true;
        }
    })
    if (todoExits){
        res.json ({message: "the todo already exits"})
    }else {
        todos.push (newTodos);
        res.json ({todos});
    }

    })



module.exports = router;