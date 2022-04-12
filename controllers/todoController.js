const Todo = require('../models/todo');

// display list of all todos
exports.todo_list = (req,res) => {
    Todo.find()
        .exec((err, data) => {
            if(err) return res.status(500).send({ message: err.message || 'Some error occured while retrieving the data'});
            res.send(data);
        });
}

// display details of single todo
exports.todo_detail = (req, res) => {
    res.send('not implemented, id: ' + req.params.todoId);
}

// create todo
exports.todo_create = (req,res) => {
    
    const new_todo = new Todo({ item: req.body.item, completed: req.body.completed });

    new_todo.save((err, data) => {
        if(err) return res.status(500).send({ message: err.message || 'Some error occured while creating the data'});

        res.send(data);
    })

}

// get single todo
exports.todo_detail = (req, res) => {

    Todo.findById(req.params.todoId)
        .then(data => {
            if(!data) {
                return res.status(404).send({message: 'Todo not found with id' + req.params.todoId});
            }
            res.send(data);
        }) 
        .catch(err => {
            if(err.kind === "ObjectId") {
                return res.status(404).send({message: 'Todo not found with id' + req.params.todoId});
            } 
            return res.status(500).send({message: 'Error retrieving todo with id' + req.params.todoId});
                   
        })


}

// update single todo
exports.todo_update = (req, res) => {
    Todo.findByIdAndUpdate(req.params.todoId, {item: req.params.item,completed: req.body.completed }, { new: true})
        .then(data => {
            if (!data) return res.status(404).send({message: 'Todo not found with id' + req.params.todoId});
            res.send(data);
        })
        .catch(err => {
            if(err.kind === "ObjectId") {
                return res.status(404).send({message: 'Todo not found with id' + req.params.todoId});
            } 
            return res.status(500).send({message: 'Error updating todo with id' + req.params.todoId});
        })
}

// delete single todo
exports.todo_delete = (req, res) => {
    Todo.findByIdAndRemove(req.params.todoId)
        .then(data => {
            if(!data) return res.status(404).send({message: 'Todo not found with id' + req.params.todoId});
            res.send({ message: 'Todo deleted successfully'});
        })
        .catch(err => {
            if(err.kind === "ObjectId") {
                return res.status(404).send({message: 'Todo not found with id' + req.params.todoId});
            } 
            return res.status(500).send({message: 'Error deleting todo with id' + req.params.todoId});
        })
}

