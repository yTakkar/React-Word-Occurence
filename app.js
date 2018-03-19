const
  express = require('express'),
  app = express(),
  { join } = require('path'),
  { rainbow } = require('handy-log'),
  bodyParser = require('body-parser'),
  PORT = 4880,
  { flattenDeep } = require('lodash'),
  fetch = require('node-fetch'),
  occurrence = require('./utils')

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.static(
  join(__dirname, '/dist')
))

// Routes
app.get('*', (req, res) =>
  res.sendFile(
    join(__dirname, '/index.html')
  )
)

app.post('/get-occurence', async (req, res) => {
  const
    fileData1 = await fetch('http://terriblytinytales.com/test.txt'),
    fileData = await fileData1.text(),
    data = fileData.split('\n'),
    array = []

  for (let line of data) {
    if (line != '') {
      let word = line.split(' ')
      array.push(word)
    }
  }

  let
    flattened = flattenDeep(array),
    getOccurence = occurrence(flattened)

  console.log(getOccurence)
  res.json(getOccurence)
})

app.listen(PORT, () =>
  rainbow('App running..')
)
