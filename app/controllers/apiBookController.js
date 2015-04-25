/**
 * Class REST
 */
var rest = require('app/config/rest')();

/**
 * Class ApiBookController
 * @extends REST class
 * @property {String} model name of the MoongooseJS model
 * @property {Array} auth authorization of methods (index, list, etc...)
 * @property {Object} req ExpressJS request object (req)
 * @property {Object} res ExpressJS response object (res)
*/
function ApiBookController() {
    //this.auth = ['get', 'post', 'put', 'delete'];
    this.auth = [];
    this.model = 'book';
}

/**
 * Overwrite the original prototype to extends REST class
 */
ApiBookController.prototype = rest;

/**
 * Method for GET requests
 * @returns {Object/Array} mixed JSON objects
 */
ApiBookController.prototype.get = function() {

    if (this.isValidGet()) {

        var apiBook = this;
        var Book = require('app/models/book');

        if (typeof this.req.params.id !== 'undefined') {

            var book = this.find(Book);
            book.exec(function(err, book) {
                apiBook.callback(err, book);
            });

        } else {

            var book = this.findAll(Book);
            book.exec(function(err, book) {
                apiBook.callback(err, book);
            });
        }
    }
};

/**
 * Method for POST requests
 * @returns {Object} JSON object
 */
ApiBookController.prototype.post = function() {

    if (this.isValidPost()) {

        var apiBook = this;
        var Book = require('app/models/book');
        var book = this.setPost(Book);

        if (book != null) {
            book.save(function(err, book) {
                apiBook.callback(err, book);
            });
        }
    }
};

/**
 * Method for PUT requests
 */
ApiBookController.prototype.put = function() {

    if (this.isValidPut()) {
        var apiBook = this;
        var Book = require('app/models/book');

        Book.findById(this.req.params.id).exec(function(err, book) {
            apiBook.putCallback(err, book);
        });
    }
};

/**
 * Method for PUT requests
 * @param {Object} err Error object
 * @param {Object} model MongooseJS model
 * @returns {Object} JSON object
 */
ApiBookController.prototype.putCallback = function(err, book) {

    if (err) {
        this.res.status(400).send('Bad Request: ' + err.message);
    } else {
        if (book != null) {
            var apiBook = this;
            var book = this.setPut(book);

            if (book != null) {
                book.save(function(err, book) {
                    apiBook.callback(err, book);
                });
            }
        }
    }
};

/**
 * Method for DELETE requests
 * @returns {Object} JSON object
 */
ApiBookController.prototype.delete = function() {

    if (this.isValidDelete()) {
        var apiBook = this;
        var Book = require('app/models/book');

        Book.findByIdAndRemove(this.req.params.id,function(err, book) {
            apiBook.callback(err, book);
        });
    }
};

/**
 * Module exports
 */
module.exports = new ApiBookController();