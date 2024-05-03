const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SocietySchema = new Schema({
    Contributions: {
        type: String
    },
    Points: {
        type: String
    },
    Society: {
        type: String
    }
});

const Society = mongoose.model('Society', SocietySchema);

module.exports = Society;
