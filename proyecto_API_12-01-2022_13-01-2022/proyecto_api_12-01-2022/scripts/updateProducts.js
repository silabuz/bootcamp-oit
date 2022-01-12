var options = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    }
}


const updateProduct = (name, description, categoryId, price, imageUrl, id) => {
    options["body"] = JSON.stringify({
        name: name,
        description: description,
        category_id: categoryId,
        price: price,
        image_url: imageUrl,
    })

    const request = fetch(`https://silabuz-api-project.herokuapp.com/products/products/${id}/`, options)
    const response = request
        .then(response => {
            console.log(response)
            if(response.ok){
                alert("El articulo ha sido actualizado con exito")
            } else {
                throw new Error(`La peticion respondio con codigo ${response.status}`)
            }
        })
        .catch(error => console.log(error.message))
}

const processProductUpdation = () => {
    const productName = document.getElementById("product-name").value;
    const productDescription = document.getElementById("product-description").value;
    const productCategoryId = document.getElementById("category-id").value;
    const productPrice = document.getElementById("product-price").value;
    const productImageUrl = document.getElementById("product-image-url").value;

    updateProduct(productName, productDescription, productCategoryId, productPrice, productImageUrl)   
}


