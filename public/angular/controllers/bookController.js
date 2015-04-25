/**
 * Controller BookIndex
 * @param {$scope} $scope DOM manipulation
 */
app.controller('BookIndex', function($scope) {

});

/**
 * Controller BookList
 * @param {$scope} $scope DOM manipulation
 * @param {Book} Book factory
 */
app.controller('BookList', function($scope, Book) {

    $scope.actionCount = function() {

        var book = new Book();
        book.params = {
            count: true
        };
        book.ready = $scope.actionCountReady;
        book.findAll();
    };
    $scope.actionCountReady = function(count) {

        $scope.count = parseInt(count);
        $scope.actionFind();
    };
    $scope.actionFind = function() {
        var book = new Book();
        book.params = $scope.params;
        book.ready = $scope.actionFindReady;
        book.findAll();
    };
    $scope.actionFindReady = function(aryBook) {
        if(Array.isArray(aryBook)) {
            $scope.aryBook = aryBook;
        } else {
            $scope.aryBook = new Array(aryBook);
        } 
    };
    $scope.actionDelete = function() {
        var book = new Book();
        book.id = $scope.deleteId;
        book.ready = $scope.actionDeleteReady;
        book.delete();
    };
    $scope.actionDeleteReady = function(book) {
        $scope.deleteId = '';
        $scope.init();
    };
    $scope.init = function() {
        $scope.actionCount();
    };
    $scope.init();
});

/**
 * Controller BookNew
* @param {$scope} $scope DOM manipulation
* @param {$location} $location service
 * @param {Book} Book factory
 */
app.controller('BookNew', function($scope, $location, Book) {

    $scope.actionSubmit = function() {

        var book = new Book();
        book.data = $scope.book;
        book.ready = $scope.actionSubmitReady;
        book.add();
    };
    $scope.actionSubmitReady = function(book) {
        $location.path('book/edit/' + book._id);
    };
    $scope.init = function() {
        $scope.submitTitle = 'Crear';
    };
    $scope.init();
});

/**
 * Controller BookEdit
 * @param {scope} $scope DOM manipulation
 * @param {stateParams} $stateParams
 * @param {Book} Book factory
 */

app.controller('BookEdit', function($scope, $stateParams, Book) {

    $scope.actionSubmit = function() {

        var book = new Book();
        book.id = $scope.book._id;
        book.data = $scope.book;
        book.ready = $scope.actionSubmitReady;
        book.error = $scope.actionSubmitError;
        book.update();
    };
    $scope.actionSubmitError = function(book) {
        $('.alert').removeClass('alert-success');
        $('.alert').addClass('alert-danger');
        $('.alert').removeClass('hidden');
        $('#alert_msg').html(book);
        $scope.init();
    };
    $scope.actionSubmitReady = function(book) {
        $('.alert').removeClass('alert-danger');
        $('.alert').addClass('alert-success');
        $('.alert').removeClass('hidden');
        $('#alert_msg').html('Datos guardados exitosamente');
        $scope.init();
    };
    $scope.init = function() {
        $scope.submitTitle = 'Guardar';
        var book = new Book();
        book.id = $stateParams.id;
        book.ready = $scope.actionInitReady;
        book.findById();
    };
    $scope.actionInitReady = function(book) {
        $scope.book = book;
    };
    $scope.$on('uploader.getFiles()', function(event, aryFiles) {
        $scope.aryFiles = aryFiles;
    });
    $scope.init();
});

/**
 * Controller BookView
 * @param {scope} $scope DOM manipulation
 * @param {stateParams} $stateParams
 * @param {Book} Book factory
 */

app.controller('BookView', function($scope, $stateParams, Book) {

    $scope.init = function() {
        var book = new Book();
        book.id = $stateParams.id;
        book.ready = $scope.actionInitReady;
        book.findById();
    };
    $scope.actionInitReady = function(book) {
        $scope.book = book;
    };
    $scope.init();
});
