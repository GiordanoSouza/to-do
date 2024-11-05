exports.createToDo = async (req, res) => {
    try{
        const data = req.body;
        const todo = new todo(data);
        const result = await todo.save();  
        console.log(result);
        res.status(201).send({message: 'ToDo created successfully'});
    }catch(err){
        console.log('Erro ao criar ToDo:', err);
        res.status(err);
    }
}