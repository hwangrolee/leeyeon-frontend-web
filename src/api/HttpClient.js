import axios from 'axios';

export default axios.create({
    baseURL: '',
    timeout: 5000, // 5000ms
    withCredentials: true,
    httpAgent: '',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic'
    }
});