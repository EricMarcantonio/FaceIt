import a from 'axios';

enum CONFIG {
    ADD_PHOTO = '/photo/add',
    LOOKUP_PHOTO = '/photo/lookup',
    GET_PHOTO = '/photo/',
    GET_STATS = '/stats',
}



const axios = a.create({
    baseURL: "http://localhost:3000/"
});

export const AddPhoto = (data: any, name: String) => {
    return axios.post(CONFIG.ADD_PHOTO, {
        picture: data,
        name: name,
    });
};



export const GetAllImages = () => {
    return axios.get(CONFIG.GET_PHOTO);
};

export const LookUpPhoto = (data: any) => {
    return axios.post(CONFIG.LOOKUP_PHOTO, {
        picture: data,
    });
};

export const GetStats = () => {
    return axios.get(CONFIG.GET_STATS);
};
