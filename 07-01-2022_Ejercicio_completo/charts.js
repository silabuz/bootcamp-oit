// PIE CHART DATA
let courses = [
    "Python",
    "React",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
];
let studentsPerCourse = [
    789,
    256,
    547,
    256,
    235,
    100]
    ;
let colors = [
    "green",
    "purple",
    "cyan",
    "yellow",
    "blue",
    "pink",
];

// LINE CHART DATA
let months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
]
let studentsByMonth = [458, 460, 412, 425, 555, 666, 695, 570, 700, 800, 900, 1000]



new Chart("pie", {
    type: "pie",
    data: {
        labels: courses,
        datasets: [
            {
                backgroundColor: colors,
                data: studentsPerCourse,
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Numero de estudiantes por curso"
        }
    },
});


new Chart("line", {
    type: "line",
    data: {
        labels: months,
        datasets: [
            {
                data: studentsByMonth,
                borderColor: "green",
            },
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Ingreso de estudiantes por mes"
        }
    }
})