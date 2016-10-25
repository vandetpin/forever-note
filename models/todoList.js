var mongoose = require("mongoose");
var database = require("../db/config");
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    // id:number,
    title:String,
    type:String,
    createdDate:Date,
    updatedDate:Date,
    deletedDate:Date,
    completedDate:Date,
    items:[
        {
            content:String,
            completed:Boolean
        }
    ]
}) 

todoSchema.pre('save',function(next){
    var currentDate = new Date();
    this.updatedDate = currentDate;
    if(!this.createdDate)
        this.createdDate = currentDate;
    next();
})

module.exports = mongoose.model(database.collectionName,todoSchema);