const express = require('express')
const app = express()
const fs = require('fs')
const mobileFindTeacherData = JSON.parse(fs.readFileSync('./mobileFindTeacher.json'))

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
}
app.use(allowCrossDomain)

app.get('/teacher/mobileFindTeacher', function(req, res, next){
  const {page, size} = req.query
  console.log(page, size)
  if (page >= 3) {
    return res.send({datas: {last: true}})
  }
  res.send(JSON.stringify(mobileFindTeacherData))
})
const server = app.listen(3001, function () {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})