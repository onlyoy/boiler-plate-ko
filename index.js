const express = require('express')
const app = express()
const port = 5000
///?retryWrites=true&w=majority0s
const mongoose =  require('mongoose');

mongoose.connect('mongodb+srv://onlyoy:591n6169@boilerplate.sgzzl90.mongodb.net', {
}).then(()=> console.log('MongoDB connected...'))
    .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World! test2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})