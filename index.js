// Importeer express uit de node_modules map
import express from 'express'

// Maak een nieuwe express app aan
const url = 'https://api.vinimini.fdnd.nl/api/v1/producten' // URL naar Json data
const data = await fetch(url).then((response) => response.json()) // Belangrijk

const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index', data)
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})




// import express from 'express'

// const url = 'https://api.vinimini.fdnd.nl/api/v1/producten'

// // Maak een nieuwe express app
// const app = express()

// // Stel in hoe we express gebruiken
// app.set('view engine', 'ejs')
// app.set('views', './views')
// app.use(express.static('public'))

// // Maak een route voor de index
// app.get('/', (request, response) => {
//   let semesterUrl = url + '/semesters'

//   fetchJson(semesterUrl).then((data) => {
//     response.render('index', data)
//   })
// })

// app.get('/sprint', (request, response) => {
//   let slug = request.query.sprintSlug || 'your-tribe'
//   let sprintUrl = url + '/sprint/' + slug
//   fetchJson(sprintUrl).then((data) => {
//     // console.log(data)
//     response.render('sprint', data)
//   })
// })

// app.get('/over', (request, response) => {
//   response.render('over')
// })

// app.get('/contact', (request, response) => {
//   response.render('contact')
// })

// // Stel het poortnummer in en start express
// app.set('port', process.env.PORT || 8000)
// app.listen(app.get('port'), function () {
//   console.log(`Application started on http://localhost:${app.get('port')}`)
// })

// /**
//  * Wraps the fetch api and returns the response body parsed through json
//  * @param {*} url the api endpoint to address
//  * @returns the json response from the api endpoint
//  */
// async function fetchJson(url) {
//   return await fetch(url)
//     .then((response) => response.json())
//     .catch((error) => error)
// }






// // import express from 'express' dit is gedaan met commonjs ipv ES modules
// // VERANDER DIT TERUG ALS JE IMPORT EN ES MODULES WILT GEBRUIKEN
// const express = import('express');

// // loading in new library for local JSON
// const fs = import('fs');

// let rawDataStudenten = fs.readFileSync('squad-a-2022.json');
// let jsonStudenten = JSON.parse(rawDataStudenten);

// // Maak een nieuwe express app
// const app = express()

// // Stel in hoe we express gebruiken
// app.set('view engine', 'ejs')
// app.set('views', './views')
// app.use(express.static('public'))

// // Maak een route voor de index
// app.get('/', (request, response) => {
//   response.render('index', jsonStudenten)
// })

// // routing voor pagina's, jsonStudenten wordt meegegeven als data
// app.get('/ervaring0-jaar', (request, response) => {
//   console.log(request.query.squad)
//   response.render('ervaring0-jaar', jsonStudenten)
// })

// app.get('/ervaring1-jaar', (request, response) => {
//   response.render('ervaring1-jaar', jsonStudenten)
// })

// app.get('/ervaring2-jaar', (request, response) => {
//   response.render('ervaring2-jaar', jsonStudenten)
// })

// app.get('/ervaring3-jaar', (request, response) => {
//   response.render('ervaring3-jaar', jsonStudenten)
// })

// app.get('/ervaring4-jaar', (request, response) => {
//   response.render('ervaring4-jaar', jsonStudenten)
// })

// app.get('/ervaring5-jaar', (request, response) => {
//   response.render('ervaring5-jaar', jsonStudenten)
// })

// // Stel het poortnummer in en start express
// app.set('port', process.env.PORT || 8000)
// app.listen(app.get('port'), function () {
//   console.log(`Application started on http://localhost:${app.get('port')}`)
// })