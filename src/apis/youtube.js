import axios from 'axios';

const KEY = "AIzaSyDm4fEuxEueTyZkIYOea-1mmuMgjUPKLtE";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }

});