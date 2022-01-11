fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(function(response){
        response.json().then(function(json) {
        var status = response.status;
        var data = json;
        console.log(status)
        console.log(data)

        let dataElement = document.getElementById("data");
        let statusElement = document.getElementById("status");

        dataElement.innerHTML = `Se recibieron: ${data.length} registros`;
        statusElement.innerHTML = `El estatus de la peticion fue: ${status}`;
        });
    })
    .catch(err => {
        console.log(err)
    });