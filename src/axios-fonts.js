import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://www.googleapis.com/webfonts/v1/'
});

export default instance;
