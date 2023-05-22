const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', {
    // userName: 'Nate',
    // users: [
    //   {username: 'Nate', email:'hello@hello.com'},
    //   {username: 'John', email:'example@example.com'},
    //   {username: 'Josh', email:'funtime@mail.com'}
    // ],
    // date: new Date()
    userNames: ['Chris', 'Nate', 'Sam']
  })
})

// app.get('/users/:name', (res, req) => {
//   res.end(`You clicked on ${req.params.name}`)
// })

app.get('/form', (req, res) => {
  res.render('form')
})

app.get('/create', (req, res) => {
  console.log(req.body)
  const user = {
    name: req.body.name,
    email: req.body.email
  }
  res.end(`Name: ${user.name}\nEmail: ${user.email}`)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})

