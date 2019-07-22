import React from 'react'
import ReactDOM from 'react-dom';

import CommentList from './screens/CommentList';
import Seasons from './screens/Seasons';
import PicDashboard from './screens/PicDashboard';
import VideoPlayer from './screens/VideoPlayer';


const App = () => {
    return (
        <Seasons />
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

