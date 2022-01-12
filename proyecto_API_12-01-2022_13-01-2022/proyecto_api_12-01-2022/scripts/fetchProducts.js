const request = fetch("https://silabuz-api-project.herokuapp.com/products/products/")
const response = request.then(response => {
    loading = true;
    return response.json()
})

const data = response.then(data => {
    data.forEach(product => {
        const card = createCard(product)
        insertCard(card)
    });
})

function createCard(element) {
    const card = document.createElement("div");
    card.className = "col-3";
    card.innerHTML = `
   <div class="card border-success">
    <img class="card-img-top" src=${element.image_url} alt=${element.name}>
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.category.name}.</p>
      <p class="card-text"><small class="text-danger">${element.price} $</small></p>
      <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#enroll")>Editar articulo</button>
    </div>
  </div>
    `
    const btn = card.querySelector(".btn")
    btn.addEventListener("click", () => alert("Caracteristica en construccion"))
    return card
}

function insertCard(card){
    const cardContainer = document.getElementById("card-container")
    const cardColumElement = cardContainer.querySelector(".row")
    cardColumElement.appendChild(card)
}

