
/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc Rest API로 전달받은 데이터를 가공하는 추상클래스
 */
export default class AbstractModel {
    constructor({result = 200, message = '', data = {}}) {
        this.code = result;
        this.message = message;
        this.data = data;
    }
}