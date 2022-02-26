import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.imgur.com/3/album',
    headers:{
        Authorization: 'Client-ID f40bef9ff160eb3'
    }
});