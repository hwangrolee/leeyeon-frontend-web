import HttpClient from './HttpClient';
const httpClient = new HttpClient({ source: 'main'});

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 주거증명 정보 관련 API를 요청하기 위한 class 입니다.
 */
class Estate {

    findAll ({ page = 0, size = 10, q = '' }) {
        if(q !== '') {
            return httpClient.post('/MAI_0300', {
                body: {
                    search: q
                }
            });
        }
        return httpClient.post('/MAI_0100');
    }

    /**
     * @description 하나의 매물을 검색한다.
     * @param { number } seq
     */
    findOneByHash (seq) {
        return httpClient.post('/MAI_0200', {
            body: {
                contseq: seq
            }
        })
    }
    
    /**
     * 부동산 매물을 저장합니다.
     * @param { Object.<*> } obj
     */
    insertEstate({ title, images, address,  ...obj }) {
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