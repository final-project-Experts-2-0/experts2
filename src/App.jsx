import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Inscription from "./components/Inscription"
  import Connection from "./components/Connection";
  import PageEntreprise from "./components/PageEntreprise";
  import './App.css';
  
  
  function Header() {
      return (
        <div>
          <h1 id="h11"> Welcome to Job Hunters </h1>
          <nav>
            <Link to="/Connection"> Connection </Link> {"  ou  "}
            <Link to="/Inscription"> Inscription </Link>
            <Link to="/PageEntreprise"></Link>
          </nav>
        </div>
      );
    }
    function App() {
        return (
          <div className="App">
            <Router>
              <Header></Header>
              <div className="container">
              <Routes>
                  <Route path="/Connection" element={<Connection />} />
                  <Route path="/Inscription" element={<Inscription />} />
                  <Route path="/PageEntreprise" element={<PageEntreprise />} />
              </Routes>
              </div>
            </Router>
          </div>
      )
      }
      
      export default App;