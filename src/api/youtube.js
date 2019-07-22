import axios from 'axios';

const API_KEY = 'AIzaSyAGilGa9et6mpANFpu1Gm8dWT5j2KF0NMY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});