import axios from 'axios';

const API_KEY = '7657c7552617a43e1ce1fb762a83cf5c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export default getWeather;