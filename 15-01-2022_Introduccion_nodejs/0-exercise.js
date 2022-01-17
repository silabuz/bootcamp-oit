// Hay un objeto dado, 
/* user = {
first_name: "John",
last_name: "Smith",
age: "38",
department: "Software"
}; */
// escriba un programa node.js para imprimir las propiedades del objeto dado, 
// elimine la segunda propiedad y obtenga la longitud del objeto.
// Retorne la longitud y propiedades del objeto en el localhost (servidor HTTP). 
// Se debe usar desestructuracion para acceder a las propiedades del objeto

var http = require('http');

var user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
};

delete user.last_name;
let userLength = Object.keys(user).length;
let {first_name, age, department} = user;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`La longitud del objecto usuario es: ${userLength}, Su nombre es: ${first_name}, Edad: ${age}, Departamento ${department}`);
}).listen(8000);
