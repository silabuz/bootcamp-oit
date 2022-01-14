const createProduct = (name, description, categoryId, price, imageUrl) => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            description: description,
            category_id: categoryId,
            price: price,
            image_url: imageUrl,
        })
    }

    const request = fetch("https://silabuz-api-project.herokuapp.com/products/products/", options)
    const response = request
        .then(response => {
            console.log(response)
            if(response.ok){
                return response.json()
            } else {
                throw new Error(`La peticion respondio con codigo ${response.status}`)
            }
        })
        .catch(error => console.log(error.message))

    const data = response.then(data => {
        if(data) {
            alert(`El articulo ${data.name} ha sido creado con exito`)
        }
    })
}

const processProductCreation = () => {
    const productName = document.getElementById("product-name").value;
    const productDescription = document.getElementById("product-description").value;
    const productCategoryId = document.getElementById("category-id").value;
    const productPrice = document.getElementById("product-price").value;
    const productImageUrl = document.getElementById("product-image-url").value;

    createProduct(productName, productDescription, productCategoryId, productPrice, productImageUrl)   
}



