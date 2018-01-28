// load the things we need
var mongoose = require('mongoose');


var quotationSchema = mongoose.Schema({

        id               : String,
        quotationId      : String,
        genjouristId     : String,
        genjourist       : String,
        category         : String,
        tags             : String,
        quote            : String,
        date             : String,
        supportNumber    : Number,
        supporters       : Array,
        repilicateNumber : Number,
        status           : Boolean,

});

const Quotation = module.exports = mongoose.model('Quotation', quotationSchema);

module.exports.addQuotation = function(newQuotation, callback){
        newQuotation.save(callback);
}

module.exports.findQuotationByCategory = function(category, callback){
        const query = {category:category}
        Quotation.find(query,callback);
}