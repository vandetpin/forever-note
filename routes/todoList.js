var express = require('express');
var router = express.Router();
var TodoModel = require('../models/todoList')
const DATA_TYPE = ['application/json'];
const RESPONSE_CODE = [200];

/* GET home page. */
router.get('/', function(req, res, next) {
    // app.db.dosomething();
    TodoModel.find({},function(err,notes){
        if(err) throw err;
        res = setResponseParams(res,RESPONSE_CODE[0],DATA_TYPE[0]);
        res.send(notes)
    })
    // res.send(/* return data here*/);
});

router.post('/save', function(req,res,next){
    // app.db.dosomething();
    new TodoModel(req.body).save(function(err,data){
        if(err) throw err;
        res = setResponseParams(res,RESPONSE_CODE[0],DATA_TYPE[0]);
        res.send(data);
    });

    // res.send(/* return currently saved object here*/);
})

router.put('/update',function(req,res,next){
    // app.db.dosomething();
    var query = { id : req.body.id};
    TodoModel.update(query,req.body,{/*options*/},function(err,note){
        if(err) throw err;
        res = setResponseParams(res,RESPONSE_CODE[0],DATA_TYPE[0]);
        res.send(note);  
    })
})

router.delete('/delete/:id',function(req,res,next){
    // app.db.dosomething();
    res.send(/* return status here*/);
})

var setResponseParams = function(res,statusCode,contentType){
    res.statusCode = statusCode;
    res.setHeader('Content-Type', contentType);
    return res;
}

// var connectDb = function(){
//     mongoose.connect('mongodb://localhost:27017/somedb'); 
// }

// var disconnectDb = function(){
//     mongoose.disconnect();
// }



module.exports = router;