const {Schema, model} = require('mongoose');

const Area = new Schema({
    title: {type: String, required: true},
})

module.exports = model('Area', Area)