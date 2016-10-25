// npm install request 
var request = require('request');
var postRequest = request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'http://127.0.0.1:3000/notes/save',
  form:    {
		// id:number,
		title:"my title",
		type:"note",
		date_created:"",
		last_updated:"",
		date_deleted:"",
		date_completed:"",    
		"items":[
			{
				content:"this is my test note",
				completed:true
			}
		]
	}
},function(error, response, body){
    console.log(body);
});