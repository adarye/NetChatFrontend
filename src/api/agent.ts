import axios, { AxiosResponse } from 'axios';
import { IChannel } from './../models/channels';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(undefined, error => {
    console.log(error.response);
});

const request = {
    get: (url:string) => axios.get(url).then(responseBody),
    post:(url:string, body:{}) => axios.post(url, body).then(responseBody),
    put: (url:string, body:{}) => axios.put(url, body).then(responseBody),
    delete: (url:string) => axios.delete(url).then(responseBody)
}

const Channels = {
    list: ():Promise<IChannel[]> => request.get('/channels'),
    create: (channel: IChannel) => request.post('/channels', channel),
}
const Messages ={

}

export default {
    Channels,
    Messages
};