import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPage from "../VideoPage/VideoPage";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const SearchPage = (props) => {
  const [videos, setVideos] = useState([]);
  const APIKEY = "AIzaSyBxEKJ7lee1-KViuzNyjtOH1dIQ8nLcuOI";
  

//   function newSearch(term) {
//     setSearch(term);
//     searchVideo(term);   
//   }


  useEffect(() => {
    searchVideo();
  }, []);

  async function searchVideo(searchTerm) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${APIKEY}&part=snippet&maxResult=2`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div>
      <SearchBar searchVideo={searchVideo} />
      <VideoPlayer  videos = {videos}/>
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
