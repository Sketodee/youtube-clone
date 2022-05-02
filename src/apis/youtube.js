import axios from 'axios'


const KEY = 'AIzaSyAsDJ4wZmUUq8tabCvEKYaOxN8sGNfS3us'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3' ,
    params: {
        part: 'snippet',
        maxResults: 15, 
        key: KEY
    }
}); 

