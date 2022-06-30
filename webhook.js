// init project
var express = require("express");
var path = require("path");
const bot = require("./telegram-bot");

// Data is stored in the file `database.json` in the folder `db`.
// Note that if you leave your app public, this database file will be copied if
// someone forks your app. So don't use it to store sensitive information.
var app = express();
var bodyParser = require("body-parser");
const srcPath = __dirname;
// Using `public` for static files: http://expressjs.com/en/starter/static-files.html
app.use(express.static(path.join(srcPath, "public")));
// Use bodyParser to parse application/x-www-form-urlencoded form data
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Create a new entry in the users table
app.post("/webhook", urlencodedParser, function(request, response) {
//  console.log("REQUEST" ,request.body.payload);
//  console.log("RESPONSE" ,response.body);
  const datString = request.body.payload;
  const data = JSON.parse(datString);
  const res = data.commits[0].message;
 console.log("RESPONSE" ,res);
  
 bot.telegrambot(res);
 
});


// Serve the root url: http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(path.join(srcPath, "views", "index.html"));
});

// Listen on port 8080
var listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});



payload={
   "after":"c04a2b2af96a5331bbee0f11fe12965902f5f571",
   "before":"78d414a69db29cdd790659924eb9b27baac67f60",
   "commits":[
      {
         "added":[
            "afile"
         ],
         "author":{
            "email":"myemailaddress@mydomain.com",
            "name":"Darren Birkett",
            "username":"mancdaz"
         },
         "committer":{
            "email":"myemailaddress@mydomain.com",
            "name":"Darren Birkett",
            "username":"mancdaz"
         },
         "distinct":true,
         "id":"c04a2b2af96a5331bbee0f11fe12965902f5f571",
         "message":"adding afile",
         "modified":[

         ],
         "removed":[

         ],
         "timestamp":"2012-09-03T02:35:59-07:00",
         "url":"https://github.com/mancdaz/mygithubrepo/commit/c04a2b2af96a5331bbee0f11fe12965902f5f571"
      }
   ],
   "compare":"https://github.com/mancdaz/mygithubrepo/compare/78d414a69db2...c04a2b2af96a",
   "created":false,
   "deleted":false,
   "forced":false,
   "head_commit":{
      "added":[
         "afile"
      ],
      "author":{
         "email":"myemailaddress@mydomain.com",
         "name":"Darren Birkett",
         "username":"mancdaz"
      },
      "committer":{
         "email":"myemailaddress@mydomain.com",
         "name":"Darren Birkett",
         "username":"mancdaz"
      },
      "distinct":true,
      "id":"c04a2b2af96a5331bbee0f11fe12965902f5f571",
      "message":"adding afile",
      "modified":[

      ],
      "removed":[

      ],
      "timestamp":"2012-09-03T02:35:59-07:00",
      "url":"https://github.com/mancdaz/mygithubrepo/commit/c04a2b2af96a5331bbee0f11fe12965902f5f571"
   },
   "pusher":{
      "email":"myemailaddress@mydomain.com",
      "name":"mancdaz"
   },
   "ref":"refs/heads/master",
   "repository":{
      "created_at":"2012-07-12T04:17:51-07:00",
      "description":"",
      "fork":false,
      "forks":1,
      "has_downloads":true,
      "has_issues":true,
      "has_wiki":true,
      "name":"mygithubrepo",
      "open_issues":0,
      "owner":{
         "email":"myemailaddress@mydomain.com",
         "name":"mancdaz"
      },
      "private":false,
      "pushed_at":"2012-09-03T02:36:06-07:00",
      "size":124,
      "stargazers":1,
      "url":"https://github.com/mancdaz/mygithubrepo",
      "watchers":1
   }
}