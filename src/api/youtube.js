import axios from 'axios';

const KEY = 'AIzaSyBgZwZI43zG6YCjck-o7eLm-7NZ0IXMLX8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
    }
});