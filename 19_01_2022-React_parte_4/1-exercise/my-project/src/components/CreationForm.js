import { useState } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const CreationForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const [created, setCreated] = useState(false);

  const createPost = (url) => {
    const postBody = post;
    axios
      .post(url, postBody)
      .then((response) => {
        setPost(response.data);
        setCreated(true);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPost((values) => ({ ...values, [name]: value }));

    console.log(post);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(url);
    setCreated(false);
    alert("Creado con Exito");
  };

  return (
    <div>
      {created ? (
        <div>
          <h1>Registro creado con exito.</h1>
          <h2>Titulo: {post.title} </h2>
          <p>Body: {post.body}</p>
        </div>
      ) : (
        <h1>Crear un Registro</h1>
      )}
      <div className="container" style={{ marginTop: "100px" }}>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Titulo
            </label>
            <input
              name="title"
              type="text"
              value={post.title}
              onChange={handleChange}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Cuerpo
            </label>
            <input
              name="body"
              value={post.body}
              onChange={handleChange}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { CreationForm };
