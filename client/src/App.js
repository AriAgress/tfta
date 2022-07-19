import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  // const getData = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:8000/api");
  //     console.log(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/query")
  //     .then((res) => console.log(res.data));
  //   axios
  //     .post("http://localhost:8000/api", {
  //       msg: "from react",
  //     })
  //     .then((res) => console.log(res.data));
  // }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
