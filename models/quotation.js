// load the things we need
var mongoose = require('mongoose');


var quotationSchema = mongoose.Schema({

        id            : String,
        genjouristId  : String,
        genjourist    : String,
        category      : String,
        title         : String,
        content       : String,
        date          : String


});

const Quotation = module.exports = mongoose.model('Quotation', quotationSchema);

module.exports.addQuotation = function(newQuotation, callback){
        newQuotation.save(callback);
       }