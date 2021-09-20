import axios from '../../shared/axios-details';
// import { store } from '../../store';

const errorMessage = "Something went wrong. Please try again";
const errorObject = {
    status: false,
    message: errorMessage
};

const getToken = () =>{
    // let auth = store.getState().auth;
    // return auth.token;
    return 1;
}

export const getAPI = async(url) =>{
    let token = getToken();
    let data;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await axios.get(url, config)
    .then(res => {
        data = res.data;
    })
    .catch(err =>{
        console.error(err)
        data = errorObject;
    })

    return data;
}


export const postAPI = async(url, postData) =>{
    let token = getToken();
    let data;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    postData = {
        ...postData
    }
   
    await axios.post(url, postData, config)
    .then(res => {
        data = res.data;
    })
    .catch(err =>{
        console.error(err)
        data = errorObject;
    })

    return data;
}


export const postFormDataAPI = async(url, postData) =>{
    let token = getToken();
    let data;

    const config = {     
        headers: { 'content-type': 'multipart/form-data',
        Authorization: `Bearer ${token}` }
    }
   
    await axios.post(url, postData, config)
    .then(res => {
        data = res.data;
    })
    .catch(err =>{
        console.error(err)
        data = errorObject;
    })

    return data;
}