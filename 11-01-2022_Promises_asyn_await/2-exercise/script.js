fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(function(response){
        response.json().then(function(json) {
        var status = response.status;
        var data = json;
        console.log(status)
        console.log(data)

        let list = document.getElementById("my-list")

        data.forEach(element => {
            let listElement = document.createElement('li');
            listElement.innerHTML = element.name
            listElement.style.color = "white"
            listElement.style.fontSize = "x-large"



            let list = document.getElementById("my-list")
            list.appendChild(listElement)
        });
        });
    })
    .catch(err => {
        console.log(err)
    });

