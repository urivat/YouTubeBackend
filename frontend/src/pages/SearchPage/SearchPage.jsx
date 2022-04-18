import React, {
    useState
} from 'react'
import {
    useNavigate
} from 'react-router-dom'
import axios from 'axios'

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

const SearchPage = (props) => {
    const [user, token] = useAuth();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const searchVideo = async (searchTerm) =>{
            try {
                let response = await axios.get("https://www.googleapis.com/youtube/v3/search" ,{
                    params: {
                        part: 'snippet',
                        maxResults: 8,
                        key:'AIzaSyAIVYtQXy7BbFBUU6pinHhLlHndNNoeL58',
                        q:searchTerm,
                        },
                    });
                     setVideos(response.data)
                         
          } catch (error) {
                console.log(error.message);

            }
        
    };searchVideo();
    
}, []);
                   

return (
    <ul className='searchPage'>
        
    </ul>
);
};

export default SearchPage;