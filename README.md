# ReactJS 기반 주거증명 웹 어플리케이션

## 개발환경
 - MacOS, VSCode, ReactJS, aws s3 hosting, material-ui, sass

## 링크
> aws s3로 배포

- http://estate-service.s3-website.ap-northeast-2.amazonaws.com

## 로컬에서 실행하기
- nodejs 설치 (센스있는 개발자라면 쉽게 설치가능)
- npm or yarn 설치 (센스있는 개발자라면 쉽게 설치가능)
- 패키지 설치
```bash
$ npm install
npm WARN ts-pnp@1.0.0 requires a peer of typescript@* but none is installed. You must install peer dependencies yourself.

audited 38352 packages in 10.381s
found 91 vulnerabilities (63 low, 27 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```
- 서비스 설행
```bash 
$ npm start # or yarn start
Starting the development server...

DEPRECATION WARNING on line 53 of stdin:
The operation `#007bff plus #444444` is deprecated and will be an error in future versions.
Consider using Sass's color functions instead.
http://sass-lang.com/documentation/Sass/Script/Functions.html#other_color_functions
```

## 배포하기
 - 빌드하기
```bash
$ npm run build
```

 - 생성된 build 폴더 aws s3에 복사

## 라이브러리
  - [react](https://www.npmjs.com/package/react), [react-dom](https://reactjs.org/docs/react-dom.html), [react-router-dom](https://reacttraining.com/react-router/)
  - [material-ui](https://material-ui.com/)
  - [material-ui-pickers](https://material-ui-pickers.dev/)
  - [react-image-gallery](https://www.npmjs.com/package/react-image-gallery)
  - [axios](https://www.npmjs.com/package/axios)
  - [react-dropzone](https://www.npmjs.com/package/react-dropzone)


## 진행사항

|항목|UI 및 Script|API연동|경로|비고|
|:---|:---:|:---:|:---|:---|
|로그인|O|X|상단메뉴 우측 **로그인 버튼**|-|
|회원가입|O|X|상단메뉴 우측 **회원가입 버튼**|-|
|조회한 주거증명|O|X|상단메뉴 > 내정보 > **조회한 주거증명 탭**|-|
|등록한 주거증명|O|X|상단메뉴 > 내정보 > **등록한 주거증명 탭**|-|
|내정보수정|O|X|상단메뉴 > 내정보 > **내정보수정 탭**|-|
|주거증명 목록|O|X|상단메뉴 > **매물보기**|-|
|주거증명 검색|O|X|상단메뉴 > 매물보기 >  **검색**|-|
|주거증명 상세|O|X|상단메뉴 > 매물보기 > **매물1개 선택**|-|
|주거증명 등록 OCR|O|X|상단메뉴 > 매물등록 > **이미지 업로그영역**|-|
|주거증명 등록 상세정보|O|X|상단메뉴 > 매물등록 > **필수 입력사항**|-|
|방문예약 목록(판매자용)|O|X|상단메뉴 > 내정보 > **방문예약 목록(판매자용)**|-|
|방문예약 상세(판매자용)|O|X|상단메뉴 > 내정보 > **방문예약 상세(판매자용)**|-|
|방문예약 목록(구매자용)|O|X|상단메뉴 > 내정보 > **방문예약 목록(판매자용)**|-|
|주거증명 상세(구매자용)|O|X|상단메뉴 > 내정보 > **주거증명 상세(구매자용)**|-|

\* **추가적인 기능 및 수정 사항은 [Bitbucket issue](https://bitbucket.org/certchain/frontend-web/issues?status=new&status=open)에 등록해주세요**