import HttpClient from './HttpClient';
const httpClient = new HttpClient({ source: 'time'});

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 구매자 측면에서의 방문예약 관련 Rest API
 */
 export default class VisitReservationForBuyer {

    /**
     * TODO: 반환값 정의 필요
     * @description 방문예약을 요청합니다.
     * @function
     * @returns
     */
    askVisitReservation () {
        return httpClient.post('/TIM_0100');
    }

    /**
     * TODO: 반환값 정의 필요
     * @description 방문예약한 리스트를 요청합니다.
     * @function
     * @returns
     */
    askVisitReservationList() {
        return httpClient.post('/TIM_0200');
    }

    /**
     * TODO: 반환값 정의 필요
     * @description 구매자 측면에서 방문예약 상세 정보를 가저옵니다.
     * @function
     * @returns
     */
    visitReservationDetail() {
        return httpClient.post('/TIM_0300') 
    }

    /**
     * TODO: 반환값 정의 필요
     * @description 구매자 측면에서 방문예약 목록을 가저옵니다.
     * @function
     * @returns {}
     */
    visitReservationList() {
        return httpClient.post('/TIM_0400')
    }
}