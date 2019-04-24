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
const PROTOCOL = "http";
// const DOMAIN = "13.125.144.56";
const DOMAIN = "realestate.insightpick.com";
// const DOMAIN = "localhost:3000";

const PROJECT_NAME = "realestate";

export default function ({ 
    appVer = 'v1', 
    source = 'member', 
    devId = 'A',
    devName = 'name',
    devLang = 'ko',
    apiKey = 'wscvtghjh3456!',
    appKey = 'qznZY8m7BIBf1fYL+gJiVToxHQw=',

}) {
    let baseURL = `${PROTOCOL}://${DOMAIN}/${PROJECT_NAME}/${appVer}/${source}`;
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
        // baseURL: baseURL,
        baseURL: `/${PROJECT_NAME}/${appVer}/${source}`,
        timeout: 5000, // 5000ms
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Headers': 'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Header,Authorization',
            // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            'apikey': apiKey,
            'appkey': appKey,
            // 'Accept': 'application/json',
            'Content-Type': 'application/json;harset=UTF-8',
            'userkey': localStorage.getItem('userkey')
        },
        transformRequest: [(data = {}, headers) => {
            const cmd = data.body.cmd.slice(0) || "";
            delete data.body.cmd;
            const requestBody = {
                body: { data: data.body || {}},
                header: {
                    'app_ver': '1.0.0',
                    'app_name': 'realestateWeb',
                    'os_ver': '1.0',
                    'os_type': 'A',
                    'dev_id': devId,
                    'dev_name': devName,
                    'dev_lang': devLang,
                    "phone_no": "",
                    "cmd": cmd
                }
            }

            const userkey = localStorage.getItem('userkey');
            if(userkey !== null) {
                requestBody.header.userkey = userkey;
            }
            
            return JSON.stringify(requestBody);
        }],
        transformResponse: function (res) {
            if(res.length > 0) {
                res = JSON.parse(res);
                const body = res.body;
                body.result = parseInt(body.result);
                return body;
            } else {
                return {};
            }
            
        }        
    })
}