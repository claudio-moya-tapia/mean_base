/**
 * Modules
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

/**
 * Schema
 */
var UserSchema = new Schema({
    local_email: {
        type: String,
        default: '',
        trim: true
    },
    local_password: {
        type: String,
        default: '',
        trim: true
    },
    google_id: {
        type: String,
        default: '',
        trim: true
    },
    google_token: {
        type: String,
        default: '',
        trim: true
    },
    google_email: {
        type: String,
        default: '',
        trim: true
    },
    google_name: {
        type: String,
        default: '',
        trim: true
    },
    google_first_name: {
        type: String,
        default: '',
        trim: true
    },
    google_last_name: {
        type: String,
        default: '',
        trim: true
    },
    google_hd: {
        type: String,
        default: '',
        trim: true
    },
    google_img: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Custom methods
 */
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local_password);
};

/**
 * Module Exports
 */
module.exports = mongoose.model('User', UserSchema, 'user');