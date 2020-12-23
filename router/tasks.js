const db=require('../module/task_module')
const express=require('express');
const router=express();

router.get('/tasks',async(req,res,next)=>{
    try{
        const task=await db.find();
        const data=task.map(item=>{
            return {...item}
        })
        res.json(data);
    }catch(err){
        next(err)
    }
})

router.post('/add-tasks',async(req,res,next)=>{
    try{
        res.json(await db.insert(req.body));
    }catch(err){
        next(err)
    }
})


module.exports=router;

