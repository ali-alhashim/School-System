const mongoose = require("mongoose");

const dbConnect = async()=>{
    try{
         await mongoose.connect('mongodb+srv://alicodeio:zv7mu16NGj3RF8Zv@cluster0.wtzr4uf.mongodb.net/?retryWrites=true&w=majority');
         console.log("DB connected successfully.................");
    } catch(error)
    {
        console.log("DB Connection failed", error.message);
    }
};

console.log("start to connect .....");
dbConnect();