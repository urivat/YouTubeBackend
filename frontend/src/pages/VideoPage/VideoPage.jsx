import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import SearchPage from '../SearchPage/SearchPage'

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"


const VideoPage = ({videos}) => {
       debugger;
        const [videosId, setVideosId] = useState('4ORZ1GmjaMc')
        
        function searchedVideos() {
                 
        } 


        return ( 
            <div>
                <VideoPlayer id = {videos.id}/>
            </div>   //This page will diplay main video and comments and replies below
 
            //components needed will be searchbar, comment form , replyform related videos
 );

}
    
    
    

     
    export default VideoPage;
 