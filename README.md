Contributed by 
 - Vandet Pin
 - Sereypanha Yorn
 - Razeev Neupane

# Forever note #
- create note or todo list, can filter by title. basic CRUD service.

## feature
- Node.js
- MongoDB + mongoose 
- Angular2  
- Bootstrap
- RESTful Web service

### import db ###
<pre>
    mongoimport -d foreverDb -c forevernotes --file  forever-note/forevernote.json
</pre>

### run local ###
- Build & run node server
<pre>
$cd forever-note
$npm install
$node app.js
</pre>

- Build & generate angular file
<pre>
$cd  forever-note/public
$npm install
$npm start
</pre>

- Go to browser
<pre>
    http://localhost:3000
</pre>

