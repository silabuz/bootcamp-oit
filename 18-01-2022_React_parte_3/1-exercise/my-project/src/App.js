import axios from "axios";
import { useState, useEffect } from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
  const [post, setpost] = useState({});

  const getPost = (baseURL) => {
    axios
      .get(baseURL)
      .then((response) => setpost(response.data))
      .catch((err) => console.log(err.message));
  };

  const updatePost = () => {
    axios
      .put(baseURL, {
        title: "Hello World!",
        body: "This is an updated post.",
      })
      .then((response) => {
        setpost(response.data);
      });
  };

  useEffect(() => {
    getPost(baseURL);
  }, []);

  return (
    <div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={() => updatePost()}>Update post</button>
    </div>
  );
}

export default App;
