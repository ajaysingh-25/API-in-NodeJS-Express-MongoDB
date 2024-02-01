const express = require("express");
const route = express.Router();
const post = require("./models/post.js");
const mongotype = require('mongoose').Types;

// get data from api
route.get('/',  async (req, res) => {
    const abc = await post.find();
    res.status(200).send(abc);
})

// create new post
route.post('/',async (req, res) => {
    let data = new post ({
        title : req.body.title,
        content : req.body.content,
        username : req.body.username
    })
    res.send(await data.save());
})

// get data by id
route.get('/:id',async (req,res) => {
    if(mongotype.ObjectId.isValid(req.params.id)) { //in mongotype we get our full object with type, content, etch (interface or model)
        const result = await post.findById(req.params.id);
        res.status(200).send(result);
    }
    else {
        res.status(400).send(`no record found for the id ${id}`)
    }
})

// delete data by id
route.delete('/:id',async (req,res) => {
    if(mongotype.ObjectId.isValid(req.params.id)) { //in mongotype we get our full object with type, content, etch (interface or model)
        const result = await post.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    }
    else {
        res.status(400).send(`no record found for the id ${id}`)
    }
})

// update data by id
route.put('/:id',async (req,res) => {

    let data = {
        title : req.body.title,
        content : req.body.content,
        username : req.body.username
    }


    if(mongotype.ObjectId.isValid(req.params.id)) { //in mongotype we get our full object with type, content, etch (interface or model)
        const result  = await post.findByIdAndUpdate(req.params.id, {$set:data}, {new:true})
        res.status(200).send(result);        
    }
    else {
        res.status(400).send(`no record found for the id ${id}`)
    }
});

module.exports = route;