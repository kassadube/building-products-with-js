var child = require('child_process').execFile;
// var executablePath = "C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe";
var executablePath  = "C:\\Users\\noam\\RethinkDB\\rethinkdb.exe";

child(executablePath, function(err, data) {
    if(err){
       console.error(err);
       return;
    }
 
    console.log(data.toString());
});