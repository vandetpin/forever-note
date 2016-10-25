var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    // id:number,
    title:String,
    type:String,
    date_created:Date,
    last_updated:Date,
    date_deleted:Date,
    date_completed:Date,    
    items:[
        {
            content:String,
            completed:Boolean
        }
    ]
}) 

todoSchema.pre('save',function(next){
    var currentDate = new Date();
    this.last_updated = currentDate;
    if(!this.date_created)
        this.date_created = currentDate;
    next();
})

module.exports = mongoose.model('todoList',todoSchema);