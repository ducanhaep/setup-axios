import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import productApi from "./api/productApi";

function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const params = 1;
        const response = await productApi.get(params);
        console.log(response);
      } catch (e) {
        console.log("Fail to fetch post list: ", e);
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
