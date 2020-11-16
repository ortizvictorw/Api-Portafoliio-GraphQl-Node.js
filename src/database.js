const mongoose =require('mongoose');


 async function connect (){

try {
    await mongoose.connect(process.env.MONGODB,{
        useNewUrlParser: true, useUnifiedTopology: true
    })
    console.log(">>>> Db is Connected");
}    
catch(e){
    console.log(">>>> Db is failed");
    console.log(e);

}
}

module.exports = connect;