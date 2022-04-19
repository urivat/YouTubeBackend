// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const SearchPage = ({search}) => {
//   const [videos, setVideos] = useState([]);
//   const APIKEY = "AIzaSyAIVYtQXy7BbFBUU6pinHhLlHndNNoeL58"

    // useEffect(() => {
    // let mounted =true
    // if(mounted){
    //     searchVideo();
    // }return() =>mounted= false;
    //  }, []);
//     
//   

//   async function searchVideo() {
//     try {
//       let response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${APIKEY}&part=snippet&maxResult=8`
//       );
//       setVideos(response.data.results);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   return (
//     <div>
//       <div>


//         <ul className="searchPage">
//           <h2>Search Results</h2>
//            <li>  </li>)}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
