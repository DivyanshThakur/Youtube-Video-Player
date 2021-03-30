import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    const search = async (value) => {
        const {data: {items}} = await youtube.get('/search', {
            params: {
                q: value
            }
        });

        setVideos(items);
    }   

    useEffect(() => {
        search(defaultSearchTerm);          
    }, [defaultSearchTerm]);

    return [videos, search];
};

export default useVideos;