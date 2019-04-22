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
   * 버전을 체크 합니다.
   */
  checkVersion() {
    return httpClient.post("/MEM_0100", { 
      body: {
        cmd: "MEM_0100"
      }
    });
  }

  /**
   * 이용약관&개인정보취급방침
   */
  terms() {
      return httpClient.post("/MEM_0200", { 
        body: {
          cmd: "MEM_0200"
        }
      });
  }
  /**
   * 서버를 통해 패스워드 검사시도
   */
  validatePassword(password) {
    return httpClient.post("/MEM_0300", { 
      body: {
        password: password,
        cmd: "MEM_0300"
      }
    });
  }

  /**
   * 회원가입
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
   * 로그인
   */
  login({ email, password, pushkey ="" }) {
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
    return httpClient.post("/MEM_1400", {
      body: {
        cmd: "MEM_1400"
      }
    }).then(() => {
      localStorage.clear();
    })
  }

  /**
   * 회원 탈퇴
   */
  remove({ email }) {
    return httpClient.post("/MEM_1500", {
      body: {
        cmd: "MEM_1500"
      }
    }).then(() => {
      localStorage.clear();
    })
  }

  /**
   * 이메일변경
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
   * 회원정보 수정
   */
  update({ password }) {
    return new HttpClient({ source: "myif" }).post("MYI_0200", {
      body: {
        password: password,
        cmd: "MYI_0200"
      }
    })
  }

  /**
   * 계정 정보를 가저옵니다.
   */
  getAccountProfile({ email }) {
    return new HttpClient({ source: "myif" }).post("MYI_0100", {
      body: {
        cmd: "MYI_0100"
      }
    });
  }

  /**
   * 이메일 인증을 진행합니다.
   * @deprecated
   */
  verifyEmail(email) {

  }

  /**
   * 읽은 부동산 목록
   */
  estateListRead() {
    return new HttpClient({ source: "myif" }).post("MYI_0400", {
      body: {
        cmd: "MYI_0400"
      }
    })
  }

  /**
   * 등록한 부동산 목록
   */
  estateListUpload() {
    return new HttpClient({ source: "myif" }).post("MYI_0500", {
      body: {
        cmd: "MYI_0500"
      }
    })
  }

}

export default new Account();
