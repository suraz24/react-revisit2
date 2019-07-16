import React from 'react'
import ReactDOM from 'react-dom';

import CommentList from './screens/CommentList';


const App = () => {
    return (
        <CommentList />
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

