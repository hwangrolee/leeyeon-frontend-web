import HttpClient from './HttpClient';

class Estate {

    /**
     * 매물을 검색한다.
     * @param { page, size, q } param0
     */
    findAll ({ page = 0, size = 10, q = '' }) {

    }

    /**
     * 하나의 매물을 검색한다.
     * @param hash
     */
    findOneByHash (hash) {

    }
    
    /**
     * 부동산 매물을 저장합니다.
     * @param { title, images } param0
     */
    insertRealEstate({ title, images, address,  ...obj }) {

    }

    /**
     * 부동산 매물을 제거한다.
     * @param hash
     */
    deleteRealEstate (hash) {

    }
    
}

export default (new Estate());