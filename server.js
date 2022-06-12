const express = require('express')
const app = express () // whenever we see app is relating to express
const cors = require('cors')
const PORT = 8000

app.use(cors())

//create an object to send through the api request
const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Sheeya',
    'name': 'London, England' 
  }, 
  'chance the rapper': {
    'age': 28,
    'birthName': 'John',
    'name': 'Rio de Janeiro, Brazil ' 
  }, 
  'dylon': {
    'age': 27,
    'birthName': 'Dylon',
    'name': 'Sydney, Australia' 
  }, 

}

//set up the server to generate requests and generate responses 
//heard a get request and we want to send a response
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html') //dirname means that to look on the dire anstarts from html
})

//create a api to send a response as json
//people usually use postman to visualize apis
//login to postman to check it out
// to see api that are served that are running locally you have to do something extra:
//you have to have postman desktop agent running on local machine and once you have it uou can make a request from your localhost

//rappername is a queryparameter
//the colon mean the parameter that will come
app.get('/api/:rapperName', (request, response) => {
  const rapperName = request.params.rapperName.toLowerCase() //this variable will grab the rappername paramater
  if (rappers[rapperName]){
    response.json(rappers[rapperName])
  } else {
    response.json(rappers['dylon'])
  }
  //response.json(rappers)

})

// make the server to listen to the request
//process.env.PORT is going to 
//since we are requesting it locally heroku is not going to work, so our servers is not set up to handle local file, because we did not learn about cors yet.
// install to handle cors errors. Run this command line to install a package that will handle this (npm install cors --save)
app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}! You better catch it!`)
})

//02:40:39