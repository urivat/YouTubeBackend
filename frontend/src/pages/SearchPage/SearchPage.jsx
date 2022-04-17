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
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const searchVideo = async () =>{
            try {
                let response = await axios.get("https://www.googleapis.com/youtube/v3/search" ,part=snippet , {
                        headers: {
                            Authorization: "Bearer " + token,
                        }
                    });
                    setVideo(response.data)
            } catch (error) {
                console.log(error.message);

            }
        
    };searchVideo();
    
}, [token]);

return (
    <div>
        <h1>This is for finding a video</h1>
        
    </div>
);
};

export default SearchPage;