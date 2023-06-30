# grimpan-front
그림판팀의 프론트엔드 소스코드 입니다

## 설치 방법
### 사전 준비 사항

- GitHub Account
- Visual Studio Code
- Node js
- npm
- expo
- xcode
- IOS Simulator or Physical iPhone

### 프론트엔드 시작하기
1. 이 리포지토리를 clone 합니다
```ps1
git clone https://github.com/HACKTON-GRIMPAN/grimpan-front.git
```
2. 다음과 링크에 접속해서 Node js LTS 버전을 설치해줍니다 (Node js 18.x 이여야합니다)
```ps1
https://nodejs.org/en
```
3. 자동적으로 환경변수 세팅이 되지만 터미널에 node -v 를 입력하여 설치가 제대로 되었는지 확인합니다
```ps1
node -v
```
4. 터미널에서 clone한 repository로 이동하여 node package manager를 사용해 라이브러리를 설치해줍니다
```ps1
cd grimpan-front
yarn
```
5. 패키지 설치가 완료될때까지 기다립니다. (10분 가량 소요됩니다.)
6. 설치가 완료되면 expo를 실행시켜 배포를 활성화 합니다
```ps1
npx expo start
```
7. 'i'를 입력하면 ios 가상머신으로 실행됩니다.
8. Physical iPhone으로 실행 하기 위해서 iphone App Store에 expo 앱을 설치합니다. 
9. 동일한 네트워크에 연결 합니다 (ex. 같은 와이파이)
10. 생성된 QR을 찍으면 expo로 이동하면서 앱이 실행됩니다.
<img width="822" alt="스크린샷 2023-06-23 오전 6 44 37" src="https://github.com/hackersground-kr/Get-It/assets/58356850/01f0e198-4db7-478e-911b-3bdde9e31bd5">

## 중요 : 원할한 배포를 위해서 일부 네이티브 라이브러리 모듈을 비활성화 시켰습니다
tip. 중간에 앱이 멈췄다면 터미널에서 'r'키를 눌러서 reload를 해주면 됩니다
