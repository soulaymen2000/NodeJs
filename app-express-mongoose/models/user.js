const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 8);
    }
    next();
});

UserSchema.methods.comparePassword = function (userPassword) {
    return bcryptjs.compare(userPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);