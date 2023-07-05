import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '35854540-bba533f8f1dc090f652d8ed86';
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
        // const response = await axios.get(BASE_URL, options);
        // const results = response.data;
        return response.data;
    }
    catch (error) {
        // console.log(error);
    }

    // return fetch(
    //     // `${BASE_URL}?key=${key}&q=${searchQuery}&image_type=${image_type}&orientation=${orientation}&page=${currentPage}&per_page=${per_page}`
    // )
    // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

}

export default getPictures;



