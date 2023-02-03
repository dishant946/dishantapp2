const express=require('express');
const router=express.Router();
router.post('/foodData',(req,res)=>{
    try{
        console.log(global.food_items);
        res.send([global.food_items,global.food_Category]);
    }
    catch(e){
        console.log(e.message);
        res.send("server Error")
    }
})
module.exports=router;