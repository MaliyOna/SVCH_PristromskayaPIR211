const {Schema, model} = require('mongoose');

const Schedule = new Schema({
    title: {type: String, required: true},
})

module.exports = model('Schedule', Schedule)