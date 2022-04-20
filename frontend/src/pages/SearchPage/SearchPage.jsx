import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";


const SearchPage = (props) => {
    
  
    const [videos, setVideos] = useState([]);
    const APIKEY = "AIzaSyAIVYtQXy7BbFBUU6pinHhLlHndNNoeL58";
    const [search, setSearch] = useState('');
    console.log(search)
    
   
function newSearch(term){
    setSearch(term);
    
    
   

}
    useEffect(() => {
        searchVideo()
    }, [search]);
    
    

    

  async function searchVideo() {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${APIKEY}&part=snippet&maxResult=8`
      );console.log(response.data.results)
      setVideos(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  }searchVideo()

  return (
    <div>
        <SearchBar searchTermProps= {newSearch}/>

      <div>


        <ul className="searchPage">
          <h2>Search Results</h2>
           
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
