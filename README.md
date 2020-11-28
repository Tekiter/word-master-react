# Word Master ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Tekiter/word-master-react/Deploy%20CI?label=actions&logo=github) <a href="LICENSE"><img src="https://img.shields.io/github/license/Tekiter/word-master-react" alt="License"></a>

React 공부와 연습용으로 만든 간단한 단어장 웹 앱입니다.

[바로가기 (Demo)](https://tekiter.github.io/word-master-react)

### Feature

- 단어장별로 단어들을 관리할 수 있습니다.
- 단어장은 브라우저의 localStorage에 저장됩니다.
- main 브랜치에 push하면 [Github Actions](https://github.com/Tekiter/word-master-react/actions)에 의해 즉시 빌드되어 [gh-pages](https://github.com/Tekiter/word-master-react/tree/gh-pages) 브랜치에 업로드됩니다.

### Used

- React [(create-react-app)](https://github.com/facebook/create-react-app)
- Mobx
- Material-UI

## Development

Node.js (12+), yarn 이 필요합니다.

### Run dev server

`yarn install` 명령으로 필요한 모듈을 설치합니다.

`yarn start` 명령으로 개발 서버를 실행합니다.

### Build

`yarn install` 명령으로 필요한 모듈을 설치합니다.

`yarn build` 명령으로 빌드합니다.

`/build` 경로에서 빌드된 파일을 확인합니다.

## License

[MIT License](LICENSE)
