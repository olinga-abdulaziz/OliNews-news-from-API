const express=require('express')
const ejs=require('ejs')
const bodyparser=require('body-parser')
const router=require('./routes/routes')

const app=express()

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use('/',router)


const port=3000
app.listen(port,()=>{
    console.log("server is running ....");
})