/**
 * Class Index
 * Prints HTML templates to AngularJS using different layouts (empty, main, main_admin, etc...)
 * @property {Array} auth authorization of methods (index, list, etc...)
 * @property {Object} req ExpressJS request object (req)
 * @property {Object} res ExpressJS response object (res)
 */
function IndexController() {
    this.auth = ['root', 'home'];
}

IndexController.prototype.root = function() {
    this.res.render('index/root.html', {
        layout: 'layout/main.html'
    });
};

IndexController.prototype.home = function() {
    this.res.render('index/home.html', {
        layout: 'layout/empty.html'
    });
};

IndexController.prototype.error = function() {
    this.res.render('index/error.html', {
        layout: 'layout/empty.html'
    });
};

module.exports = new IndexController();