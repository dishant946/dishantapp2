const mongodb=require('./db.js')
const express=require('express');
const cors=require('cors');
const app=express();
const PORT =process.env.PORT || 5000;
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"http://localhost:3000");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With","Content-Type,Accept"
    );
    next();
})
app.use(cors());
app.use(express.json());

app.use('/api/',require('./Routes/CreateUser.js'));
app.use('/api/',require('./Routes/DisplayData.js'));
app.use('/api/',require('./Routes/OrderData.js'));
mongodb();
app.get('/',(req,res)=>{
    res.send("hello world")
});


if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

   

    }





app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} port`);
})