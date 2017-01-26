var express = require('express');
var fs = require('fs');

var app = express(); //create an express app
app.set ('views', __dirname + '/views'); //specify the views directory
app.set ('view engine', 'ejs'); //set the view engine
app.use(express.static(__dirname + '/public')); //set the public folder

app.get('/', function(req, res){

 // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
   // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
  fs.readFile("views/index.ejs", 'utf8', function (err, contents) {

   if (err) {
       // res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/Menstrual_Tracker.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

       // res.render("answer_page.ejs", {data: json_data_object});

       res.render("index.ejs", {data: json_data_object});
     }
   });
  
}); // respond to requests for the default route


app.get('/mt.html', function(req, res){

 // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
   // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
  fs.readFile("views/mt.ejs", 'utf8', function (err, contents) {

   if (err) {
       // res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/Menstrual_Tracker.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

       // res.render("answer_page.ejs", {data: json_data_object});

       res.render("mt.ejs", {data: json_data_object});
     }
   });
  
});


app.get('/about.html', function(req, res){

 // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
   // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
  fs.readFile("views/about.ejs", 'utf8', function (err, contents) {

   if (err) {
       // res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/Menstrual_Tracker.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

       // res.render("answer_page.ejs", {data: json_data_object});

       res.render("about.ejs", {data: json_data_object});
     }
   });
  
});


app.get('/faq.html', function(req, res){

 // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
   // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
  fs.readFile("views/faq.ejs", 'utf8', function (err, contents) {

   if (err) {
       // res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/faq.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

       // res.render("answer_page.ejs", {data: json_data_object});

       res.render("faq.ejs", {data: json_data_object});
     }
   });
  
});



app.get('/st.html', function(req, res){

 // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
   // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
  fs.readFile("views/st.ejs", 'utf8', function (err, contents) {

   if (err) {
       // res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/symptomtracker.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

       // res.render("answer_page.ejs", {data: json_data_object});

       res.render("st.ejs", {data: json_data_object});
     }
   });
  
});

app.get('/summary', function(req,res){
  var json_data_string = fs.readFileSync("data/symptomtracker.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

        res.render("stresult.ejs", {data: json_data_object});
});


app.get('/SACT.html', function(req, res){

 // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
   // fs.readFile("views/answer_page.ejs", 'utf8', function (err, contents) {
  fs.readFile("views/SACT.ejs", 'utf8', function (err, contents) {

   if (err) {
       // res.render("error.ejs", {data: {"type":"500"}});
     }
     else{
        var json_data_string = fs.readFileSync("data/SACT.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

       // res.render("answer_page.ejs", {data: json_data_object});

       res.render("SACT.ejs", {data: json_data_object});
     }
   });
  
});

app.get('/results', function(req, res){
     var json_data_string = fs.readFileSync("data/SACT.json", 'utf8'); 
     var json_data_object = JSON.parse(json_data_string);//need to know basis
     res.render("Results.ejs", {data: json_data_object});
});


app.get('/full.html', function(req, res){
   
  fs.readFile("views/full.ejs", 'utf8', function (err, contents) {

     if (err) {
        
     }
     else{
        var json_data_string = fs.readFileSync("data/full.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

        res.render("full.ejs", {data: json_data_object});
     }
  });
  
}); // respond to requests for the default route

app.get('/summary2', function(req,res){
  var json_data_string = fs.readFileSync("data/full.json", 'utf8'); 
        var json_data_object = JSON.parse(json_data_string);//need to know basis

        res.render("summary2.ejs", {data: json_data_object});
});


var port = process.env.PORT || 4000;
app.listen(port);