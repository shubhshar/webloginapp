import "./App.css";
import "./components/homepage/homepage.jsx";
import Homepage from "./components/homepage/homepage.jsx";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Login />
      {/* <Register /> */}
    </div>
  );
}

export default App;
