const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    FirstName:{
        type: String
    },
    LastName:{
        type: String
    },
    phoneno:{
        type: String
    },
    emailid: {
        type: String
    },
    password: {
        type: String
    }
})


const User = mongoose.model('Credential', UserSchema)

module.exports = User