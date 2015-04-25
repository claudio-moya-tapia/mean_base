/**
 * Class BookController
 * Prints HTML templates to AngularJS using different layouts (empty, main, main_admin, etc...)
 * @property {Array} auth authorization of methods (index, list, etc...)
 * @property {Object} req ExpressJS request object (req)
 * @property {Object} res ExpressJS response object (res)
 */
function BookController() {
    //this.auth = ['index', 'list', 'view', 'new', 'edit', 'delete'];
    this.auth = [];
}

BookController.prototype.list = function() {
    this.res.render('book/list.html',{
        layout:'layout/empty.html'
    });
};

BookController.prototype.view = function() {
    this.res.render('book/view.html',{
        layout:'layout/empty.html'
    });
};

BookController.prototype.new = function() {
    this.res.render('book/new.html',{
        layout:'layout/empty.html'
    });
};

BookController.prototype.edit = function() {
    this.res.render('book/edit.html',{
        layout:'layout/empty.html'
    });
};

BookController.prototype.delete = function() {
    this.res.render('book/delete.html',{
        layout:'layout/empty.html'
    });
};

/**
 * Module exports
 */
module.exports = new BookController();