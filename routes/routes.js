const express=require('express')
const router=express.Router()
const axios=require('axios')

const apikey='f1f175fa17c145aa90329748ae66d2fa'

router.get('/', async(req,res)=>{
  await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-12-07&sortBy=publishedAt&apiKey=f1f175fa17c145aa90329748ae66d2fa ').then(news=>{
        const mynews=news.data.articles
        res.render('home',{mynews})
    })

})

module.exports=router