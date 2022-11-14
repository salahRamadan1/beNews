const { addComment, getComment, getCommentNote, deleteCom, updateCom } = require('../services/comments.service')
const app = require('express').Router()
app.post('/addComment' , addComment)
app.get("/getComments" , getComment)
app.get('/comNews' ,getCommentNote)
app.delete('/deleteCom' ,deleteCom )
app.put('/Update' , updateCom)
module.exports = app
