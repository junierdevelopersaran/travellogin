const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const Hruser=require('./Main')
const reglogUser=require('./L&RMain')
const applyuser = require('./Applymain')
const port=3001

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send('hello hr'))

mongoose.connect('mongodb://localhost:27017/Hrcreate')

app.post('/postData',(req,res)=>{
  
    Hruser.create(req.body)
    .then((Main)=>{console.log(Main)})
    .catch((err)=>{console.log(err)})

    res.send("well done")
})
app.get('/joborder',(req,res)=>{
    Hruser.find(req.body)
        .then((Main)=>res.json(Main))
        .catch((err)=>{
            console.error(err);
            res.status(500).send("error fetching orders")
        })
    
})

app.post('/regData',(req,res)=>{
    reglogUser.create(req.body)
    .then((e)=>{console.log(e.data)})
    .catch((err)=>{console.log(err)})

    res.send("well done the register")
})

app.get('/returnData',(req,res)=>{
    reglogUser.find(req.body)
        .then((e)=>res.json(e))
        .catch((err)=>{
            console.error(err);
            res.status(500).send("error register orders")
        })
    
})


app.post('/appliedpostData',(req,res)=>{
    applyuser.create(req.body)
    .then((e)=>{console.log(e.data)})
    .catch((err)=>{console.log(err)})

    res.send("well done the appliedform")
})

app.get('/applyReturn',(req,res)=>{
    applyuser.find(req.body)
        .then((e)=>res.json(e))
        .catch((err)=>{
            console.error(err);
            res.status(500).send("error candidates")
        })
    
})
app.listen(port,()=>console.log(`the port is ready  ${port}!`))