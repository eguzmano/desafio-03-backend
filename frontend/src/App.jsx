import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:5000/api/v1";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get(urlBaseServer + "/posts");
    setPosts(data.posts);
  };

  const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion };
    await axios.post(urlBaseServer + "/post", post);
    getPosts();
  };

  // este método se utilizará en el siguiente desafío
  const like = async (post) => {
  const updatedPost = {
    titulo: post.titulo,
    img: post.img,
    descripcion: post.descripcion,
    likes: post.likes + 1,
  };

  await axios.put(`${urlBaseServer}/posts/${post.id}`, updatedPost);
  getPosts();
};

  // este método se utilizará en el siguiente desafío
  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              like={like}
              eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
