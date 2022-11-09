const express =  require('express');
const app = express();


const port = process.env.PORT || 3030;
var server = app.listen(port, listening);

//var ip = require("ip");
//var ipAddress = ip.address();

app.use(express.urlencoded({ extended: false})); // this is for read post data
app.use(express.json()); //this is to read json

function listening() {
    //console.log(`listening at ${ipAddress}:${port}`)
    console.log(`listening at ${port}`)
};

app.get('/', (req, res) => {
    res.send('test of get working')
    console.dir('test of get working')
});
app.post('/', (req, res) => {
    
    
    if(typeof req.body.id != 'undefined'){
        console.dir(req.body.id)
    }
    if(typeof req.body.value != 'undefined'){
        console.dir(req.body.value)
    }
    if(typeof req.body.location != 'undefined'){
        console.dir(req.body.location)
    }
    if(typeof req.body.setpoint != 'undefined'){
        console.dir(req.body.setpoint)
    }
    if(typeof req.body.unit != 'undefined'){
        console.dir(req.body.unit)
    }
    res.send(`${req.body} has been sent`)
   
});
app.all('*', (req, res) => {
    res.status(404).send('<h1>404! Upss Page not found</h1>');
});// this ons in the end