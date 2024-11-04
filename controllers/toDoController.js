exports.createTodo = async (req, res) => {
    try{
        const {title, description, isCompleted} = req.body;
        const todo = new ToDo(data);
        const result = await todo.save();
        console.log(result);
        res.status(201).send({message:"Created New Task"});
    }catch(err){
        console.log(err);
        res.send(err);
}
}