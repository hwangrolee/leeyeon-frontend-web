import axios from 'axios';

/*
export default axios.create({
    baseURL: '/v1',
    timeout: 5000, // 5000ms
    withCredentials: true,
    httpAgent: '',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'app_ver': '1.0.0',
        'app_name': 'estate',
        'os_ver': 'web',
        'os_type': 'w',
        'dev_id': 'w-dev-id-test',
        'dev_name': 'w-dev-name-test',
        'dev_lang': 'ko',
    }
});
*/
export default function ({ 
    appVer = 'v1', 
    source = 'member', 
    devId = 'w-dev-id-test',
    devName = 'w-dev-name-test',
    devLang = 'ko'
}) {
    const DOMAIN = "";
    const PROJECT_NAME = "estate";

    let baseURL = `${DOMAIN}/${PROJECT_NAME}/${appVer}/${source}`;
    let appVerForHeader;
    
    switch (appVerForHeader) {
        case 'v1':
            appVerForHeader = '1.0.0';
            break;
        default:
            appVerForHeader = '1.0.0';
            break;
    }
    
    return axios.create({
        baseURL: baseURL,
        timeout: 5000, // 5000ms
        // withCredentials: true,
        httpAgent: '',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'app_ver': '1.0.0',
            'app_name': 'estate',
            'os_ver': 'web',
            'os_type': 'w',
            'dev_id': devId,
            'dev_name': devName,
            'dev_lang': devLang,
        }
    })
}