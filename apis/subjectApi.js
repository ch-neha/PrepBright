const exp = require("express");

// mini exp application, special route
const subjectApp = exp.Router();

const expressasynchandler = require("express-async-handler");

subjectApp.get('/getsubject',expressasynchandler(async (req, res) => {
    let subjectclnobj=req.app.get("subjectclnobj");

    let subjects = await subjectclnobj.find().toArray();

    res.send({message: "All subjects" , payload : subjects});
}))

subjectApp.post('/createsubject', expressasynchandler( async (req, res) => {
    let subjectclnobj=req.app.get("subjectclnobj");
    let subjectobj = req.body;
    
    subjectclnobj.findOne({name:{$eq:subjectobj.name}}).then(subject=>{
        if(subject!=null) {
            res.send({message: "subject already created"});
        }
        else{
            subjectclnobj.insertOne(subjectobj,(error,result) => {
                if(error){
                    console.log("error in creation");
                }
                else{
                    res.send({message:"added"});
                }
            });
        }
    })

    
}))

module.exports = subjectApp;