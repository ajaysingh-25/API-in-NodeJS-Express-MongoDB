const db = require("mongoose");

const post = db.model('post', {
    title: {type:String},
    content:{type:String},
    username:{type:String}
});

module.exports = post;