export default class RegExp {
    /**
     * 이메일 검증
     * @param {*} email 
     */
    static verifyEmail (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    /**
     * 글자수 7 ~ 15자
     * 숫자 1개와 특수문자 1개 필수
     * 알파벳 소대문자 가능
     * @link https://www.w3resource.com/javascript/password-validation.php
     * @param {*} password 
     */
    static verifyPassword (password) {
        var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
        return re.test(String(password));
    }
}