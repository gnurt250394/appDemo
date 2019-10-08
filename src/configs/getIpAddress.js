import { NetworkInfo } from 'react-native-network-info';
const getIpAddress = async () => {
    try {
        let ip = await NetworkInfo.getIPAddress()
        console.log('ip: ', ip);
        return 'http://' + ip + ':8000/'
    } catch (error) {

    }

}

export default getIpAddress