// load the things we need
var mongoose = require('mongoose');


var quotationSchema = mongoose.Schema({

        id            : String,
        quotationId   : String,
        genjouristId  : String,
        genjourist    : String,
        category      : String,
        tags          : String,
        content       : String,
        date          : String,
        status        : Boolean,

});

const Quotation = module.exports = mongoose.model('Quotation', quotationSchema);

module.exports.addQuotation = function(newQuotation, callback){
        newQuotation.save(callback);
}