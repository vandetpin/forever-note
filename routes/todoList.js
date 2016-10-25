var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // app.db.dosomething();
    res.send(/* return data here*/);
});

router.post('/save', function(req,res,next){
    // app.db.dosomething();
    res.send(/* return currently saved object here*/);
})

router.put('/update',function(req,res,next){
    // app.db.dosomething();
    res.send(/* return currently updated object here*/);
})

router.delete('/delete/:id',function(req,res,next){
    // app.db.dosomething();
    res.send(/* return status here*/);
})

var setResponseParams = function(res,statusCode,contentType){
    res.statusCode = statusCode;
    res.writeHead(statusCode,{'Content-Type':contentType});
    return res;
}

// var connectDb = function(){
//     mongoose.connect('mongodb://localhost:27017/somedb'); 
// }

// var disconnectDb = function(){
//     mongoose.disconnect();
// }

module.exports = router;