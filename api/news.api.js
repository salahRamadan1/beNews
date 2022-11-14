const { addNews,   getAllNews, userNews, deleteNews, UpdateNews, getNewsById, getNewsByTitle } = require("../services/news.service")
const app = require("express").Router()
app.post("/addNews" ,addNews )
app.get('/getAllNews' ,getAllNews)
app.get('/userNews' , userNews)
app.delete('/deleteNews' ,deleteNews)
app.put('/updateNews' ,UpdateNews)
app.get('/getById' , getNewsById)
app.get('/getNewsByTitle', getNewsByTitle)
 
module.exports = app