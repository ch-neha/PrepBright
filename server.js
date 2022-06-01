// create express app
const exp = require("express");
//internally contains the http server obj too
const app = exp();

const mclient=require("mongodb").MongoClient;

// import path module
const path = require('path');
// connect build of react app with nodejs, join mtd joines the current file with build folder 
app.use(exp.static(path.join(__dirname,'./build')))

app.use(exp.json());

const subjectApp = require("./apis/subjectApi");
const resourceApp = require("./apis/resourceApi");

// db connection url
const dburl = "mongodb+srv://neha:neha@cluster0.osbgk.mongodb.net/?retryWrites=true&w=majority";

// connect with mongodb server
mclient.connect(dburl)
.then((client) => {
    console.log("db connection success");
    let dbobj=client.db("prepbright");
    let subclnobj=dbobj.collection("subject");
    let resclnobj=dbobj.collection("resource");
    // share collectionobj with apis
    app.set("subjectclnobj", subclnobj);
    app.set("resourceclnobj", resclnobj);
})
.catch(err => console.log('error in db server', err));

app.use('/subject', subjectApp);
app.use('/resource', resourceApp);

// dealing with page refresh
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname,'./build/index.html'))
})

// handling invalid paths
app.use((req, res, next) => {
    res.send({message: `path ${req.url} is invalid`})
})

// error handling middleware
app.use((err,req,res,next) => {
    res.send({message: "error occured", error:`${err.message}`});
})

app.listen(5000, () => console.log("server listening at port 5000"))
