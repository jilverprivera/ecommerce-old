import axios from "axios";

const ecommerceURL = axios.create({
    baseURL: "http://localhost:5000",
});

// ecommerceURL.interceptors.request.use(
//     async(config) => {
// const token = await AsyncStorage.getItem('token');
// if ( token ) {
//     config.headers['x-token'] = token;
// }
// return config;
//     }
// )

export default ecommerceURL;
