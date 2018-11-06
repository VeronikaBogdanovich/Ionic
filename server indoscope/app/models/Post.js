var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    username:String,
    description:String,
    date:String,
    time:String,
    duration:String,
    price:String,
    priceRun:String
});

module.exports = mongoose.model('Post', PostSchema);
