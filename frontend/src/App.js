// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState }from "react";
//import useAuth from "../../hooks/useAuth";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  const [searchTerm , setSearchTerm] = useState("");
  const [video, setVideo] = useState([]);
  // const [user, token] = useAuth();
  // const [comment, setComment] = useState([]);
 




function newSearch(search){
    let queryItem = searchTerm;
    debugger;
    setSearchTerm(queryItem);
   

}

return (
    <div>
      <Navbar /> 
      <SearchBar newSearchTerm = {newSearch}/>
      
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path = "/search" element={<PrivateRoute><SearchPage /></PrivateRoute>} />
        <Route path = "/video" element ={<PrivateRoute><VideoPage/></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
