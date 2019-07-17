import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2d5091a56fcc07cb7df31dac42c66fbedf6b3a3109e81f5e576907b423526f5d'
    }
});