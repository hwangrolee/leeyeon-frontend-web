import HttpClient from './HttpClient';
import axios from 'axios';
const httpClient = new HttpClient({ source: 'main'});

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 주거증명 정보 관련 API를 요청하기 위한 class 입니다.
 */
class Estate {

    findAll ({ page = 1, q = '' }) {
        if(q !== '') {
            return httpClient.post('/MAI_0300', {
                body: {
                    search: q,
                    pageno: page,
                    'cmd': 'MAI_0300',
                }
            });
        }
        return httpClient.post('/MAI_0100', {
            body: { pageno: page, cmd: 'MAI_0100', },
        });
    }

    /**
     * @description 하나의 매물을 검색한다.
     * @param { number } id
     */
    findOneById (id) {
        const data = {
            contseq: id, 
            'cmd': 'MAI_0200'
        }

        return httpClient.post('/MAI_0200', {
            body: data
        })
    }
    
    /**
     * 부동산 매물을 저장합니다.
     * @param { Object.<*> } obj
     */
    insertEstate(estateInfo) {
        const info = {
            paddr: estateInfo.address,
            paptnm: estateInfo.buildingName,
            pyear: estateInfo.builtYear.toString(),
            psize: estateInfo.size.toString(),
            popt1: Object.keys(estateInfo.options).join(','),
            popt2: estateInfo.content,
            // imgfile: estateInfo.image,
            cmd: "CON_1000"
        }

        const data = {
            body: {
                paddr: estateInfo.address,
                paptnm: estateInfo.buildingName,
                pyear: estateInfo.builtYear.toString(),
                psize: estateInfo.size.toString(),
                popt1: Object.keys(estateInfo.options).join(','),
                popt2: estateInfo.content,
            },
            header: {
                'app_ver': '1.0.0',
                'app_name': 'realestateWeb',
                'os_ver': '1.0',
                'os_type': 'A',
                'dev_id': "A",
                'dev_name': "name",
                'dev_lang': "ko",
                "phone_no": "",
                "cmd": "CON_1000" 
            }
        }

        const formData = new FormData();
        formData.set('imgfile', estateInfo.image);
        formData.set('jsonparams', JSON.stringify(data));

        return axios.post('/realestate/v1/cont/CON_1000', formData, {
            headers: {
                'apikey': 'wscvtghjh3456',
                'appkey': 'qznZY8m7BIBf1fYL+gJiVToxHQw=',
                'Content-Type': 'multipart/form-data',
                'userkey': localStorage.getItem('userkey')
            }
        })
    }

    /**
     * @description 부동산 매물을 제거한다.
     * @param hash
     */
    deleteEstate (hash) {

    }

    /**
     * @description 방문예약 요청
     * @param { number } seq 
     */
    requestVisitReservation(seq) {

    }
    
}

export default (new Estate());