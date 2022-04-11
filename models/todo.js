const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    item: String,
    completed: {type: Boolean, default: false}
    
});

module.exports = mongoose.model('Todo', TodoSchema)