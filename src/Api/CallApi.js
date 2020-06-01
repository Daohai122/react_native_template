import AsyncStorage from "@react-native-community/async-storage";
import LinkApi from "../Config/ServerConfig";

let Token;
async function getToken() {
    const token = await AsyncStorage.getItem('token');
    return token;
}


let headersConfig = {};

let callApi = {
    OnStart: async () => {
        console.log('co vao load token')
        Token =  await getToken();
    },
    LoginScreen: {
        LONGIN: {
            method: 'get',
            url: LinkApi + 'posts',
            headers: headersConfig
        }
    }
}
export default callApi;