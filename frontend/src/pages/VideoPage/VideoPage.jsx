import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


const VideoPage = (props) => {
        console.log(props)
        const [videosId, setVideosId] = useState('4ORZ1GmjaMc')



        return ( 
            <div>
                <VideoPlayer id = {videosId}/>
            </div>   //This page will diplay main video and comments and replies below
 
            //components needed will be searchbar, comment form , replyform related videos
 );

}
    
    
    

     
    export default VideoPage;
 