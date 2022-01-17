// instale e importe el modulo fetch de nodejs - npm install node-fetch
// Consuma la API de planetas con la siguiente URL: 'https://handlers.education.launchcode.org/static/planets.json'
// Concatene todos los nombres de planetas y muestrelos en un servidor web local haciendo uso de nodejs

import fetch from "node-fetch";
import http from 'http';

const request = fetch('https://handlers.education.launchcode.org/static/planets.json')
const response = request.then(response => response.json())

async function asyncCall(res){
    let planetNames = "";

    const planets = await response.then(data => data)
    planets.forEach(planet => planetNames += `${planet.name}; `)

    return res.end(planetNames); 
}

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    asyncCall(res)
}).listen(8080);