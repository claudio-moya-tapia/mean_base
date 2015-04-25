/**
 * Factory Book
 * @extends activeRecordService
 * @param {activeRecordService} activeRecordService
 * @return {activeRecordService} activeRecordService overwrited to controller
 */
app.factory('Book', function(activeRecordService) {

    function Book(){
        this.model = 'book';
    }

    Book.prototype = activeRecordService;

    return Book;
});
