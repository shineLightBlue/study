const express = require('express')
const mysql = require('mysql')
const app = express()
const multer = require('multer')
const path = require('path')
const redis = require('redis')
const cors  = require('cors')
const bodyParser = require('body-parser')
const client = redis.createClient({
    host:'localhost',
    port:6379
})
client.on('connect',()=>{
    console.log('redis client connected')
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, Date.now() + '-' + file.fieldname + path.extname(file.originalname)); 
    }
  })
const upload = multer({ storage: storage })
app.use(express.urlencoded({extended:false}))
app.use(express.static('uploads'))
app.use(cors())

//读取json配置
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({
    extended: true
}))
 
 
app.post('/query', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

const port = 3000
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'db1',
    port:3306
})
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/brand',(req,res)=>{
    const sql = 'SELECT * FROM tb_brand';
    db.query(sql,(err,data)=>{
        res.send(data)
    })
})
app.post('/brand',(req,res)=>{
    console.log(req)
    console.log(req.body)
    const data = req.body
    const sql  = 'insert into tb_brand set ?'
    db.query(sql,data,(err,data)=>{
      res.send(data)
    })
})
app.put('/brand',(req,res)=>{
    const data = req.body
    console.log(data)
    const sql = 'update tb_brand set ? where id = ?'
    db.query(sql,[data,data.id],(err,data)=>{
        res.send(data)
    })
})
app.delete('/brand/:id',(req,res)=>{
    const data = req.params.id
    // const sql = 'delete from tb_brand where id = ?'
    const sql = 'update tb_brand set status = 0 where id = ?'
    db.query(sql,data,(err,data)=>{
        res.send(data)
    })
})
app.post('/upload',upload.single('file'),(req,res)=>{
    console.log(req.file)
    res.send(req.file)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))