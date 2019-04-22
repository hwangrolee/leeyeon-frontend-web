import HttpClient from './HttpClient';
const httpClient = new HttpClient({ source: 'myif'});

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 구매자 측면에서의 방문예약 관련 Rest API
 */
 export default class VisitReservationForBuyer {

    /**
     * @description 구매자 측면에서 방문예약 목록을 가저옵니다.
     * @function
     * @returns {}
     */
    visitReservationList({ page = 1 }) {
        return httpClient.post('/VIT_0300', {
            body: {
                pageno: page,
                cmd: "VIT_0300"
            }
        })
    }

    /**
     * @description 방문예약을 요청합니다.
     * @function
     * @returns
     */
    askVisitReservation ({ estateId, date }) {
        return httpClient.post('/VIT_0500', {
            body: {
                contseq: estateId,
                restime: date,
                cmd: "VIT_0500"

            }
        });
    }
}