import HttpClient from './HttpClient';
const httpClient = new HttpClient({ source: 'time'});

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 구매자 측면에서의 방문예약 관련 Rest API
 */
export class VisitReservationForBuyer {

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

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 판매자 측면에서의 방문예약 관련 Rest API
 */
export class VisitReservationForSeller {

    /**
     * TODO: 반환값 정의 필요
     * @description 방문예약을 수락합니다.
     * @function
     * @returns 
     */
    acceptVisitReservation() {
        return httpClient.post('/TIM_0700');
    }

    /**
     * TODO: 반환값 정의 필요, URI정의 필요
     * @description 방문예약을 거절합니다.
     * @function
     * @returns
     */
    rejectVisitReservation() {
        return httpClient.post('/TIM_0700');
    }

    /**
     * TODO: 반환값 정의 필요
     * @description 판매자 측면에서 방문예약 목록을 가저옵니다.
     * @function
     * @returns
     */
    visitReservationList() {
        return httpClient.post('/TIM_0700');
    }

    /**
     * TODO: 반환값 정의 필요
     * @description 판매자 측면에서 방문예약 상세를 가저옵니다.
     * @function
     * @returns
     */
    visitReservationDetail() {
        return httpClient.post('/TIM_0700');
    }
}



