fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(function(response){
        response.json().then(function(json) {
        var status = response.status;
        var data = json;
        console.log(status)
        console.log(data)

        data.forEach(element => {
            createCard(element);
        });
        });
    })
    .catch(err => {
        console.log(err)
    });


function createCard(element){
    let card = document.createElement('div');
    card.className = 'card m-3';
    card.style.width = "18rem"


    let image = document.createElement('img');
    image.className = "card-img-top";
    image.src = element.image

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = element.name


    let cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = element.star


    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    card.appendChild(image);
    card.appendChild(cardBody);

    let container = document.getElementById("container")
    container.appendChild(card)
}