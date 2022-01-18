import axios from "axios";
import { useState, useEffect } from "react";

// URLS
const signUpURL =
  "https://silabuz-api-project.herokuapp.com/authentication/sign-up/";
const loginURL =
  "https://silabuz-api-project.herokuapp.com/authentication/login/";
const createProductURL =
  "https://silabuz-api-project.herokuapp.com/products/products/";
const categoriesURL =
  "https://silabuz-api-project.herokuapp.com/products/categories/";
const productDetail = (id) =>
  `https://silabuz-api-project.herokuapp.com/products/products/${id}/`;

function App() {
  const [product, setProduct] = useState();

  // HANDLE PRODUCT UPDATION
  const handleProductUpdation = (id, token) => {
    console.log("Product Updating ...");

    axios
      .patch(
        productDetail(id),
        { name: "UPDATED PRODUCT" },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => console.log(err.message));
  };

  // HANDLE PRODUCT CREATION
  const handleProductCreation = (createProductURL, categoryId) => {
    console.log("Product Creation ...");
    let body = {
      name: "Apple",
      category_id: categoryId,
      description: "product-description",
      price: 20,
      image_url:
        "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=20&m=185262648&s=170667a&w=0&h=s3mKXNLM2dhLS3m55HYNnuC4aHwcEK_NUd7N5GjBZZ0=",
    };

    const token = localStorage.getItem("token");

    axios
      .post(createProductURL, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        handleProductUpdation(data.pk, token);
      })
      .catch((err) => alert(err.message));
  };

  // HANDLE CATEGORIES FETCH
  const handleCategoryFetching = (categoriesURL) => {
    console.log("Fetching Categories ...");

    axios
      .get(categoriesURL)
      .then((response) => {
        const data = response.data[0];
        handleProductCreation(createProductURL, data.pk);
      })
      .catch((err) => alert(err.message));
  };

  // HANDLE LOGIN
  const handleLogin = (loginURL, username, password) => {
    console.log("Login ...");

    axios
      .post(loginURL, { username: username, password: password })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", `Token ${token}`);
      });
  };

  // HANDLE SIGNUP
  const handleSingUp = (signUpURL) => {
    console.log("Signing Up ...");

    let body = {
      username: "test-user-creation1",
      email: "test-user-creation1@gmail.com",
      password: "123456",
    };
    axios
      .post(signUpURL, body)
      .then((response) => {
        const { username } = response.data;
        const { password } = body;
        handleLogin(loginURL, username, password);
        const token = localStorage.getItem("token");
        if (token) {
          handleCategoryFetching(categoriesURL);
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="App">
      {product ? (
        <div className="m-l-15">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={product.image_url}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <a href="#" className="btn btn-primary">
                {product.price}
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Iniciar Proceso</h2>
          <button onClick={() => handleSingUp(signUpURL)}>INICIAR</button>
        </div>
      )}
    </div>
  );
}

export default App;
