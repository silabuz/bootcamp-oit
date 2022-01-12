var loading = true;
const categoriesRequest = fetch("https://silabuz-api-project.herokuapp.com/products/categories/")
const categoriesResponse = categoriesRequest.then(response => {
    return response.json()
})

const categories = categoriesResponse.then(data => {
    console.log(data)
    data.forEach(category => {
        const listCell = createListCell(category)
        insertListCell(listCell)
    })
})

function createListCell(element) {
    const listElement = document.createElement("li");
    const categoriesButton = document.getElementById("categories");

    listElement.value = element.pk
    listElement.className = "list-group-item list-group-item-action"
    listElement.textContent = element.name
    listElement.addEventListener("click", () =>{
        const categoryId = document.getElementById("category-id")
        categoryId.value = listElement.value
        categoriesButton.textContent = element.name
    })
    return listElement
}

function insertListCell(listCell){
    const listContainer = document.getElementById("product-category-id")
    listContainer.appendChild(listCell)
}

