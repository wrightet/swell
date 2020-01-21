const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
        type: String,
        required: true
    }, 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    gear: {
        type: Array,
        default: []
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;