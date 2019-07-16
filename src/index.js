import React from 'react'
import ReactDOM from 'react-dom';

import CommentList from './screens/CommentList';
import Seasons from './screens/Seasons';


const App = () => {
    return (
        <Seasons />
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

