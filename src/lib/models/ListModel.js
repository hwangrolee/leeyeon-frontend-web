import AbstractModel from './AbstractModel';

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 리스트데이터를 가공
 */
export default class ListModel extends AbstractModel {

    constructor(res) {
        super(res);

        this.data = { 
            list: res.data.cntlist 
        };
    }
}