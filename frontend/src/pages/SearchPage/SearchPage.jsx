import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchPage = (props) => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const APIKEY = "AIzaSyAIVYtQXy7BbFBUU6pinHhLlHndNNoeL58"

  useEffect(() => {
    searchVideo("superman");
  }, [videos]);

  async function searchVideo(searchTerm) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${APIKEY}&part=snippet&maxResult=8`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div>
        <SearchBar searchTermProperties={searchVideo} />

        <ul className="searchPage">
          <h2>Search Results</h2>
          <li> {props.videos} </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
