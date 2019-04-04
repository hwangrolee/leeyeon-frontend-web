import AbstractModel from './AbstractModel';

export default class PaginationModel extends AbstractModel {
    
    constructor(data) {
        super(data);
        this.totalCount = data.total;
        this.data = { 
            list: data.typelist.cntlist
         };
    }
}