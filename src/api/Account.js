import HttpClient from './HttpClient';

class Account {

    /**
     * 로그인 시도
     * @param { email, password } param0 
     */
    login ({ email, password }) {
        // TODO. 로그인을 위한 작업 진행
    }

    /**
     * 로그아웃
     */
    logout() {
        // TODO. 로그아웃 요청 후 세션 제거
    }

    /**
     * 계정 정보를 가저옵니다.
     * @param { email } param0 
     */
    getAccountProfile({ email }) {

    }

    /**
     * 회원가입
     * @param { email, password } param0 
     */
    signup ({ email, password }) {

    }

    /**
     * 이메일 인증을 진행합니다.
     * @param { email } email 
     */
    verifyEmail (email) {

    }

    /**
     * 휴대폰 인증을 위해 인증코드를 요청한다.
     * @param { phoneNumber } phoneNumber 
     */
    requestVerificationCode (phoneNumber) {

    }

    /**
     * 휴대폰 인증을 통해 받은 인증코드를 검증한다.
     * @param { verificationCode } verificationCode 
     */
    verifyVerificationCode (verificationCode) {

    }

    /**
     * 회원 탈퇴
     * @param { email } param0 
     */
    remove ({ email }) {

    }
}


export default (new Account());