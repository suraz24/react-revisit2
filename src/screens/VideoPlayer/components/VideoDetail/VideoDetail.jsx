import React from 'react';
import Spinner from '../../../../components/Spinner';

const VideoDetail = ({selectedVideo}) => {
    if(!selectedVideo){
        return <Spinner />
    }
    else{
        const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
        return (
            <>
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {selectedVideo.snippet.title}
                    </h4>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
            </>
        );
    }
}

export default VideoDetail;