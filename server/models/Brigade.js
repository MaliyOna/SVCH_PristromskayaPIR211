const {Schema, Types, model} = require('mongoose');

const Brigade = new Schema({
    title: {type: String, required: true},
    area: {type: Types.ObjectId, ref: 'Area'},
    schedule: {type: Types.ObjectId, ref: 'Schedule'},
})

module.exports = model('Brigade', Brigade)