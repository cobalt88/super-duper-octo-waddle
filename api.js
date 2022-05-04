const express = require('express');
const app = express();
const PORT = process.env.port || 3000;
const path = require('path');
const bodyParser = require('body-parser')


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('data'))

app.get('/', (req, res) => {
  res.send("hello world")
})

app.get('/recipes', (req, res) => {
  let options = {
    root: path.join(__dirname, 'data'),
  }
  res.sendFile('test.json', options)
})

app.get('/names', (req, res) => {
  let options = {
    root: path.join(__dirname, 'data')
  }
  res.sendFile('names.json', options)
})

app.post('/names', (req, res) => {
  console.log(req.body);
  res.send(`request received ${req}`)
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

//   ./data/names.json