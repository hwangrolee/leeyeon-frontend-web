import HttpClient from './HttpClient';
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
        const data = {
            paddr: estateInfo.address,
            paptnm: estateInfo.buildingName,
            pyear: estateInfo.builtYear,
            psize: estateInfo.size,
            popt1: Object.keys(estateInfo.options).join(','),
            popt2: estateInfo.content,
            imgfile: estateInfo.image,
            cmd: "CON_1000"
        }
        return new HttpClient({ source: 'cont'}).post('/CON_1000', {
            body: data,
        }, {
            headers: {
                'Content-Type': 'multipart/form-data;'
            }
        });
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