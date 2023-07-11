import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';

async function getPictures (searchQuery, page) {
    const options = {
        key: '35854540-bba533f8f1dc090f652d8ed86',
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
    };
    const { key, image_type, orientation, per_page } = options;
    
    try {
        const response = await axios.get(
            `${BASE_URL}?key=${key}&q=${searchQuery}&image_type=${image_type}&orientation=${orientation}&page=${page}&per_page=${per_page}`
        )
       
        return response.data;
    }
    catch (error) {
      
    }
}

export default getPictures;



