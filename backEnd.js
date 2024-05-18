const express = require("express")
let portNumber = 5501;
const app = express()
const path = require("path");
const bodyParser = require("body-parser");
const dbOps = require('./database');




app.use(bodyParser.urlencoded({extended:false}));
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.listen(portNumber, (err) => {
    if (err) {
      console.log("Starting server failed.");
    } else {
      console.log(`Web server started and running at: http://localhost:${portNumber}`);
    }
});

app.get('/',(request, response) => {
    response.render("home")
})

app.post('/search',async (request, response) => {
    let stateName = request.body.state
    ob = {state:stateName}
    await dbOps.insertToDb(ob)
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + stateName+ "&appid=1f0df05fa1680a503b7c9170f26bd6b0&units=imperial")
    .then(response => response.json())
    .then(data => { 
        if(data.cod == 404){
            response.send("State Not Found")
        }
        else{
            const weatherInfo = {
                location: data.name,
                temperature: data.main.temp,
                condition: data.weather[0].description,
                windSpeed: data.wind.speed,
                humidity: data.main.humidity
              };
            response.render("weather",weatherInfo)
        }
     })
    .catch(error => console.error('Error:', error))
})

app.post('/pre',async (request, response) => {
    let content = `<table style="border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <th style="border: 1px solid black;">Previous Searches</th>
    </tr>`;
    let result = await dbOps.getPre();
    let documents = await result.toArray();
    let tableRows = documents.map(doc => `
            <tr style="border: 1px solid black;">
                <td style="border: 1px solid black;">${doc.state}</td>
            </tr>
        `).join('');
    content = content + tableRows + '</table>';
    response.send(content)
})