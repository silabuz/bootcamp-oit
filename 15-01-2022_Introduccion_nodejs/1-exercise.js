// Hay una lista de objetos (estudiantes), 
/* 
var students = [
    {name: "Etudiante 1", edad: 18, score: 15},
    {name: "Etudiante 2", edad: 12, score: 15},
    {name: "Etudiante 3", edad: 13, score: 15},
    {name: "Etudiante 4", edad: 23, score: 15},
    {name: "Etudiante 5", edad: 34, score: 15},
    {name: "Etudiante 6", edad: 5, score: 15},
    {name: "Etudiante 7", edad: 16, score: 15},
    {name: "Etudiante 8", edad: 76, score: 15},
    {name: "Etudiante 9", edad: 65, score: 15},
]
*/
// escriba el programa node.js para Enviar un correo de felicitaciones a aquellos estudiantes con 
// un score (calificacion) mayor a 15
// y un mensaje de motivacion a aquellos estudiantes con una calificacion menor a 10
// Saludar a cada estudiante usando su nombre.

import nodemailer from "nodemailer";

const students = [
    {name: "Etudiante 1", edad: 18, score: 15, email: "estudent1@gmail.com"},
    {name: "Etudiante 2", edad: 12, score: 15, email: "estudent2@gmail.com"},
    {name: "Etudiante 3", edad: 13, score: 15, email: "estudent3@gmail.com"},
    {name: "Etudiante 4", edad: 23, score: 15, email: "estudent4@gmail.com"},
    {name: "Etudiante 5", edad: 34, score: 15, email: "estudent5@gmail.com"},
    {name: "Etudiante 6", edad: 54, score: 15, email: "estudent6@gmail.com"},
    {name: "Etudiante 7", edad: 16, score: 15, email: "estudent7@gmail.com"},
    {name: "Etudiante 8", edad: 76, score: 15, email: "estudent8@gmail.com"},
    {name: "Etudiante 9", edad: 65, score: 15, email: "estudent9@gmail.com"},
]

students.forEach(student => {
    sendEmail(student);
});


function sendEmail(student){
    let {email} = student;

    let text;
    if(student.score > 15){
        text = `Hola ${student.name} Felicidades por tu esfuerzo`;
    } else {
        text = `Hola ${student.name} Debes esforzarte mas en clases`;
    }

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nodeoitbootcamp@gmail.com',
            pass: 'asd123$*26'
        }
    });

    let mailOptions = {
        from: 'nodeoitbootcamp@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}



