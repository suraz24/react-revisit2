import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song, duration}) => {
    if(!song){
        return(
            <h3>No songs selected!! Please select a song</h3>
        )
    }
    return(
        <div>
            <h3>Song: {song.title}</h3>
            <h5>Duration: {song.duration}</h5>
        </div>
    );

}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetails);
