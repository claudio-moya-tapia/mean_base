/**
 * Modules
 */
var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');
var Schema = mongoose.Schema;

/**
* Reference Schema
*/
var User = require('app/models/user');
/**
 * Schema
 */
var BookSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    release_date: {
        type: Date,
        default: Date.now
    },
    brand_new: {
        type: Boolean,
        default: false
    },
    ref_user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

/**
 * Plugin deepPopulate to populate data on multiple references
 */
BookSchema.plugin(deepPopulate);

/**
 * Module Exports
 */
module.exports = mongoose.model('Book', BookSchema, 'book');