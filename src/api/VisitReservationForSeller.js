import HttpClient from './HttpClient';
const httpClient = new HttpClient({ source: 'myif'});

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 판매자 측면에서의 방문예약 관련 Rest API
 */
 export default class VisitReservationForSeller {

   /**
     * @description 판매자 측면에서 방문예약 목록을 가저옵니다.
     * @function
     * @returns
     */
    visitReservationList({ page = 1 }) {
        return httpClient.post('/VIT_0100', {
            body: {
                pageno: page,
                cmd: "VIT_0100"
            }
        });
    }

    /**
     * @description 방문예약을 수락합니다.
     * @function
     * @returns 
     */
    acceptVisitReservation(estateId) {
        return httpClient.post('/VIT_0200', {
            body: {
                contseq:estateId,
                status: 'O',
                cmd: "VIT_0200"
            }
        });
    }

    /**
     * @description 방문예약을 거절합니다.
     * @function
     * @returns
     */
    rejectVisitReservation(estateId) {
        return httpClient.post('/VIT_0200', {
            body: {
                contseq:estateId,
                status: 'C',
                cmd: "VIT_0200"
            }
        });
    }
}