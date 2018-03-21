// var fs = require('fs');
// let promisey = new Promise((resolve,reject) => {
//     fs.readFile('test.js',{encoding: 'utf-8'}, (err,data) =>
//     {
//         if(err){
//             reject(err);
//             console.log("from reject "+err);
//         }
//         else{
//             resolve(data);
//             console.log("from resolve "+data);
//         }
//     });    
// });


// promisey.then((output) => {
//     console.log(output);
// })
// .catch((problem) => { 
//     console.log(`err   ${problem}`);
// })

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// let prom = new Promise((resolve,reject) => {

//      var xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "https://api.github.com/users/sandeephexa", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send();
//     var response = JSON.parse(xhttp.responseText);
//     if(response)
//     {
//         resolve(JSON.stringify(response));
//     }
//     else{
//         reject(reject);
//     }
// })

// var str = "data-123";
// var a = str.split('-');
// var b = a[0];
// console.log(typeof b);
// console.log("before "+str);
// str = str.replace("data-", "");
// console.log("after "+str.length);

require('dotenv').config();
  var myAPIKey = process.env.MYAPIKEY;
  
  var url = 'https://externalapi.service.com/v1/query?key=' + myAPIKey;
  console.log(myAPIKey);
  
 




