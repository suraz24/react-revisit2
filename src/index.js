import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CommentList from './screens/CommentList';
import Seasons from './screens/Seasons';
import PicDashboard from './screens/PicDashboard';
import VideoPlayer from './screens/VideoPlayer';
import Songs from './screens/Songs';
import reducers from './reducers';



const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <Songs />
        </Provider>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'));

