const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("../backend/routes.js")
const frontend_port = "http://localhost:4200";
const backend_port_no = 3000;

const db = require("./db.js");

app.use(bodyParser.json());
app.use(cors({origin :  frontend_port}));


app.listen(backend_port_no, () => {
    console.log(`server started on port ${backend_port_no}`);
})
app.use('/server',router); 
