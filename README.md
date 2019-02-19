# ReactJS 기반 주거증명 웹 어플리케이션

## 개발환경
 - MacOS, VSCode, ReactJS, Bootstrap, AWS Beanstalk

## 기능
 - 공통 컴포넌트
    - PopupComponent
        - [ ] PopupLargeComponent
            - 큰 사이즈 팝업창 ( width: 1/3, height: auto)
        - [ ] PopupMediumComponent
            - 중간 사이즈 팝업창 ( width: 1/2, height: auto)
        - [ ] PopupSmallComponent
            - 작은 사이즈 팝업창 ( width: 1/5, height: auto)

    - ImageComponent
        - [ ] SlideImageComponent
        - [ ] SingleImageComponent

    - LoadingComponent
        - [ ] ProgressBarComponent
        - [ ] CircleComponent

- 사용자 관련
    - [ ] 회원가입( components/SignupComponent/* )
        - [ ] 이메일 인증 팝업 창 ( componenets/EmailVerifyWrapperCompnent/* )
            - 이메일 인증을 감싸는 컴포넌트
        - [ ] 이메일 인증 ( components/EmailVerifyComponent/* )
            - 이메일을 인증하는 컴포넌트
        - [ ] 휴대폰 인증 팝업 창 ( componenets/PhoneVerifyWrapperComponent/* )
            - 휴대폰 인증을 감싸는 컴포넌트
        - [ ] 휴대폰 인증 ( components/PhoneVerifyComponent/* )
            - 휴대폰을 인증하는 컴포넌트
        - [ ] 휴대폰 인증 성공/실패 창 ( componenets/PhoneVerifyResultComponent/* )
            - 휴대폰 인증 완료 후 결과창 ( 성공/실패 )
    - [ ] 로그인 ( components/LoginComponent/* )
    - [ ] 로그아웃 ( components/LogoutComponent/* )
    - [ ] 회원탈퇴 ( components/WithdrawalComponent/* )
    - [ ] 회원탈퇴 결과 ( components/WidthdrawalResultComplete/* )
    - [ ] 사용자 정보 ( components/UserProfileComponent/* )
- 주거정보 관련 (components/RealEstate/)
    - 주거정보 목록 ( components/RealEstateList/*)
    - 주거정보 요약 정보 ( components/RealEstateSummary/*)
    - 주거정보 상세 정보 ( components/RealEstateDetail/*)
    - 주거정보 삭제 ( components/RealEstateDelete/* )
    - 주거정보 추가 ( components/RealEstateInsert/* )
- OCR 관련 ( components/OCRComponent/ )
    - OCR 이미지 스캔 ( components/OCRComponent)
    - OCR 레이아웃 ( components/OCRWrapperComponent)
    - OCR 결과 ( components/OCRResultComponent)
- 결제 관련(components/PayComponent)



---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
