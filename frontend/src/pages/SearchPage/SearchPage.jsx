import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPage from "../VideoPage/VideoPage";

const SearchPage = (props) => {
  const [videos, setVideos] = useState([]);
  const APIKEY = "AIzaSyAIVYtQXy7BbFBUU6pinHhLlHndNNoeL58";
  

//   function newSearch(term) {
//     setSearch(term);
//     searchVideo(term);   
//   }


  useEffect(() => {
    searchVideo();
  }, [videos]);

  async function searchVideo(searchTerm) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${APIKEY}&part=snippet&maxResult=2`
      );
      console.log(response.data);
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div>
      <SearchBar searchVideo={searchVideo} />
      <VideoPage  videos = {videos}/>
      {/* <SearchBar updateSearchTerm={newSearch} /> */}

      <div>
        <ul className="searchPage">
          <h2>Search Results</h2>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
