import React from 'react';
import { connect } from 'react-redux';

import { SelectSong } from '../../../../actions';

const SongList = props => {
    const { songs, SelectSong } = props;

    const renderList = () => {
        return songs.map ((song, index) => {
            return(
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => SelectSong(song)} 
                            >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>

                </div>
            )
        });
    }
    return(
        <div className="ui divided list">
            {renderList()}
        </div>
    );
} 

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs };
}

export default connect(mapStateToProps, { SelectSong })(SongList);