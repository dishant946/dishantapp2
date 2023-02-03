const mongoose=require('mongoose');
function mongoconnect(){
    const url="mongodb+srv://dishantsoni:zIMeFxpdkys6cdQf@cluster0.bxd4fu6.mongodb.net/sample?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},async(err,result)=>{
if(result){
   await console.log('connected');
    const fetched_data=await mongoose.connection.db.collection('hellos');
    fetched_data.find({}).toArray(async(err,data)=>{
        const foodCategory=await mongoose.connection.db.collection('sample2');
        foodCategory.find({}).toArray(function(err,catdata){
           if(data){
            global.food_items=data;
            global.food_Category=catdata;
           }
        })
        // if(data){
        //    // console.log(data);
        //    global.food_items=data;
        //    //console.log(global.food_items);
        // }
    })
}
if(err){
    console.log(err.message);
}
});
}
module.exports=mongoconnect;

