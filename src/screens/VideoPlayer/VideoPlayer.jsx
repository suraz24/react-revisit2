import React, {useState, useEffect} from 'react';
import SearchBar from '../../components/SearchBar';
import VideoList from './components/VideoList';
import youtube from '../../api/youtube';
import VideoDetail from './components/VideoDetail';

const VideoPlayer = () => {
    
    let [videos, setVideos] = useState([]);
    let [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('funny cats videos');
    });

    const onSearchSubmit = async searchTerm => {
       const response = await youtube.get('/search', {
           params:{
                q: searchTerm
           }
       });
       setVideos(response.data.items);
       setSelectedVideo(response.data.items[0])
    }


    const onVideoSelect = video => {
        setSelectedVideo(video);
    }

    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div> 
                    <div className="five wide column">
                        <VideoList videos = {videos} onVideoSelect={onVideoSelect}/>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;