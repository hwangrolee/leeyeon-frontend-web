import HttpClient from "./HttpClient";
const httpClient = new HttpClient({ source: "member" });

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 계정관련 API를 요청하기 위한 class 입니다.
 */
class Account {
  /**
   * @description 버전 체크 상세 결과 데이터
   * @ignore
   * @typedef { object.<*> } CheckedVersion
   * @property { string } status  S: 서버 점검중 (업데이트 설명을 표시한다),  N: 정상진행
   * @property { string } version 현재버전(서버기준 최신버전)
   * @property { string } vertype 버전업데이트종류(0:업데이트없음, 1:선택업데이트(팝업취소가능), 2: 강제업데이트)
   * @property { string } updateurl 업데이트  URL
   * @property { string } verdesc 업데이트 설명
   */
  /**
   * 버전 체크 결과
   * @ignore
   * @typedef { Promise.<number, string, CheckedVersion> } Version
   * @property { number } result 최종결과코드 (200:성공)
   * @property { string } message 결과 메시지 (result 값이 200[성공]이 아닐때 뿌려줄 메시지)
   * @property { CheckedVersion } data
   */
  /**
   * 버전을 체크 합니다.
   * @function
   * @returns { Version }
   */
  checkVersion() {
    return httpClient.post("/MEM_0100", { 
      body: {
        cmd: "MEM_0100"
      }
    });
  }

    /**
   * 이용약관&개인정보취급방침 상세 결과 데이터
   * @ignore
   * @typedef { object.<*> } DetailPolicy
   * @property { string } aurl1 이용약관  html url (요약)
   * @property { string } purl1 개인정보 취급방침  html url (요약)
   * @property { string } aurl2 이용약관  html url ( 상세 )
   * @property { string } prul2 개인정보 취급방침  html url (상세)
   */
    /**
   * 이용약관&개인정보취급방침 결과
   * @ignore
   * @typedef { Promise.<number, string, DetailPolicy> } Policy
   * @property { number } result 최종결과코드 (200:성공)
   * @property { string } message 결과 메시지 (result 값이 200[성공]이 아닐때 뿌려줄 메시지)
   * @property { DetailPolicy } data
   */
  /**
   * 이용약관&개인정보취급방침
   * @function
   * @returns {Policy } 
   */
  terms() {
      return httpClient.post("/MEM_0200", { 
        body: {
          cmd: "MEM_0200"
        }
      });
  }

  /**
   * 패스워드 검사 결과
   * @ignore
   * @typedef { Promise.<number, string> } CheckedPassword
   * @property { number } result 최종결과코드 (200:성공)
   * @property { string }  message 결과 메시지 (result 값이 200[성공]이 아닐때 뿌려줄 메시지)
   */
  /**
   * 서버를 통해 패스워드 검사시도
   * @function
   * @param { string } password 검사할 비밀번호
   * @returns { CheckedPassword }
   */
  validatePassword(password) {
    // 비밀번호 유효성 검사
    return httpClient.post("/MEM_0300", { 
      body: {
        password: password,
        cmd: "MEM_0300"
      }
    });
  }

  /**
   * 회원가입 상세 결과
   * @typedef { object.<number, string> } SignupData
   * @property { number } status - 회원상태 (1: 회원가입 대기,   2: EMAIL 인증 완료,  3: 폰인증 완료,  9: 사용자 인증 완료)
   * @property { string } userkey - USERKEY
   */

  /**
   * 회원가입 결과
   * @typedef { Promise.<number, string, SignupData> } SignupResult
   * @property { number } result 최종결과코드 (200:성공)
   * @property { string } message 결과 메시지 (result 값이 200[성공]이 아닐때 뿌려줄 메시지)
   * @property { SignupData } data
   */
  /**
   * 회원가입
   * @function
   * @param { Object } account - 회원가입을 위한 데이터
   * @param { string } account.email - 이메일 정보
   * @param { string } account.password - 비밀번호 
   * @returns { SignupResult }
   */
  signup({ email, password }) {
    return httpClient.post("/MEM_0400", { 
      body: {
        email: email,
        password: password,
        cmd: "MEM_0400"
      }
    });
  }

  /**
   * @description 로그인 상세 결과
   * @typedef { object.<number, string> } LoginData
   * @property { number } status - 회원상태 (1: 회원가입 대기,   2: EMAIL 인증 완료,  3: 폰인증 완료,  9: 사용자 인증 완료(진회원))
   * @property { string } userkey - USERKEY 
   */
  /**
   * @description 로그인 결과
   * @typedef { Promise.<number, string, LoginData> } LoginResult
   * @property { number } result 최종결과코드 (200:성공)
   * @property { string } message 결과 메시지 (result 값이 200[성공]이 아닐때 뿌려줄 메시지)
   * @property { LoginData } data
   */
  /**
   * @description 로그인
   * @function
   * @param { Object } login - 로그인을 위해 이메일 및 비밀번호 필요
   * @param { string } login.email - 이메일
   * @param { string } login.password - 비밀번호  
   * @param { string } login.pushkey - 로그인을 위한 푸시키
   * @returns { LoginResult }
   */
  login({ email, password, pushkey ="" }) {
    // TODO: 로그인을 위한 작업 진행
    return httpClient.post("/MEM_0500", { 
      body: {
        email: email,
        password: password,
        pushkey: pushkey,
        cmd: "MEM_0500"
      }
    });
  }

  /**
   * 자동로그인
   */
  loginAutomatically() {
    return httpClient.post("/MEM_0700", {
      body: {
        cmd: "MEM_0700"
      }
    });
  }

  updatePushkey() {
    return httpClient.post("/MEM_1000", {
      body: {
        cmd: "MEM_1000"
      }
    });
  }

  /**
   * 휴대폰 인증을 위해 인증코드를 요청한다.
   * @param { phoneNumber } phoneNumber
   */
  requestVerificationCode({ username, phoneNumber, nationNumber = 82 }) {
    return httpClient.post("/MEM_1200", { 
      body: {
        username: username,
        natphno: nationNumber,
        phoneno: phoneNumber,
        cmd: "MEM_1200"
      }
    });
  }

  /**
   * 휴대폰 인증을 통해 받은 인증코드를 검증한다.
   * @param { verificationCode } verificationCode
   */
  verifyVerificationCode(verificationCode) {
    return httpClient.post("/MEM_1300", { 
      body: {
        authkey: verificationCode,
        cmd: "MEM_1300"
      }
    });
  }

  /**
   * 로그아웃
   */
  logout() {
    // TODO: 로그아웃 요청 후 세션 제거
    return httpClient.post("/MEM_1400", {
      body: {
        cmd: "MEM_1400"
      }
    });
  }

  /**
   * 회원 탈퇴
   * @param { email } param0
   */
  remove({ email }) {
    return httpClient.post("/MEM_1500", {
      body: {
        cmd: "MEM_1500"
      }
    });
  }

  /**
   * 이메일변경
   * @param { string } email
   */
  changeEmail(email) {
    return httpClient.post("MEM_1600", {
      body: {
        email: email,
        cmd: "MEM_1600"
      }
    });
  }

  /**
   * 계정 정보를 가저옵니다.
   * @param { email } param0
   */
  getAccountProfile({ email }) {}

  /**
   * 이메일 인증을 진행합니다.
   * @param { email } email
   */
  verifyEmail(email) {}
}

export default new Account();
