import React from 'react'
import ReactDOM from 'react-dom';

import CommentList from './screens/CommentList';
import Seasons from './screens/Seasons';
import PicDashboard from './screens/PicDashboard';


const App = () => {
    return (
        <PicDashboard />
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

