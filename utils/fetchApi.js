import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async(url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '58ab5a7d92mshe8d9d6239652051p146bd8jsna335d94c4dae'
          }
    });
    return data;
}

