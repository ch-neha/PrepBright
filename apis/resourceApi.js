const exp = require("express");

// mini exp application, special route
const resourceApp = exp.Router();

const expressasynchandler = require("express-async-handler");

resourceApp.get('/getresource',expressasynchandler(async (req, res) => {
    let resourceclnobj=req.app.get("resourceclnobj");

    let resources = await resourceclnobj.find().toArray();

    res.send({message: "All resources" , payload : resources});
}))

resourceApp.post('/createresource', expressasynchandler( async (req, res) => {
    let resourceclnobj=req.app.get("resourceclnobj");
    let resourceobj = req.body;

    resourceclnobj.insertOne(resourceobj,(error,result) => {
        if(error){
            console.log("error in creation");
        }
        else{
            res.send({message:"added"});
        }
    });

    
}))

module.exports = resourceApp;