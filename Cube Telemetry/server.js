require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const secret = process.env.TOKEN;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
  });
  
app.use(express.json());
app.use(express.urlencoded({ extended:true}))


mongoose.connect('mongodb+srv://mehra11aarti:7827351031@cluster0.tjprssr.mongodb.net/?retryWrites=true&w=majority',  
  { 
    dbName:'Telemetry',
    user:'mehra11aarti',
    pass: '7827351031',
    useNewUrlParser: true,
    useUnifiedTopology: true
    
  })

.then(() => {
    console.log('mongodb connected....');
});

app.all('/test', (req,res)   =>  {
    console.log(req.body);
    res.send(req.body);
});


const SatelliteRoute = require('./Routes/Satellite.route');
app.use('/'+secret, SatelliteRoute);


app.use((req,res,next)  => {
    const err = new Error("Not found");
    err.status=404
    next(err);
});


//error handler
app.use((err,req,res,next)  => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500 ,
            message: err.message
        }
    });
   
});
app.listen(3000,() => {
    console.log("node api app is running on port 3000");

}); 
