import "./App.css";
import Navbar from "./Navbar/Navbar.tsx";
import TeaLoadOut from "./Page/TeaLoadOut/TeaLoadOut.tsx";
//Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Home from "./Page/Home/Home.tsx";
import Login from "./Page/Login/Login";
//Hooks
import { useEffect, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <main>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  email={email}
                  isLoggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route
              path="/login"
              element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
