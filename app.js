const express=require("express");


const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
const userRoutes=require("./routes/userRoutes");

app.use(express.urlencoded({extended:true}));
app.use('/api/v1',userRoutes);
app.use((err,req,res,next) => {
    console.log(err.message);
});
module.exports=app;