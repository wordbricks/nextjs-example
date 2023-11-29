## Description

`web/pages/index.ts` 템플릿 코드를 전달 받은 후 진행해주세요.

1. `text/reverse` api endpoint를 작성합니다. text를 인자로 받아서 이를 뒤집어서 반환합니다.

2. `text/reverse` api 가 호출될 때 마다 history로 기록해두며 (input, ouput을 필수적으로 기록) `text/history` api 호출되면 현재까지의 히스토리들을 반환합니다.

3. `text.service`에 대한 유닛테스트를 작성합니다. (`npm test`로 테스트를 실행해볼 수 있습니다.)



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
