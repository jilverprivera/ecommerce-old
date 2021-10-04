import axios from "axios";

const ecommerceURL = axios.create({
    baseURL: "https://tech-ecommerce.herokuapp.com",
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
