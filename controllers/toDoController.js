const ToDo = require("../models/ToDoList");

exports.createToDo = async (req, res) => {
    try{
        const data = req.body;
        const todo = new ToDo(data);
        const result = await todo.save();  
        console.log(result);
        res.status(201).send({message: 'ToDo created successfully'});
    }catch(err){
        console.log('Erro ao criar ToDo:', err);
        res.status(err);
    }
}

exports.getAllToDo = async (req, res) => {
    let{userId}= req.params;
    try{
        const result = await ToDo.find({createdBy: userId});
        res.send(result);
    }catch(err){
        console.log('Erro ao buscar ToDos:', err);
        res.status(400).send(err);
    }
}



exports.updateToDo = async (req, res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const result = await ToDo.findByIdAndUpdate(id, {$set:data},{returnOriginal: false});
        console.log(result);
        res.send({message: 'ToDo updated, ligma'});
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}


exports.deleteToDo = async (req, res) => {
    try{
        const {id}=req.params
        const result = await ToDo.findByIdAndDelete(id);
        console.log(result);
        res.send({message: 'ToDo deleted successfully'});

    }catch(err){
        console.log('Erro ao deletar ToDo:', err);
        res.status(400).send(err);
    }
}