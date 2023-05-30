## 개발 모드 실행 방법

이 방법은 파일이 바뀔때마다 실시간으로 반영됩니다.

1. 먼저 ZARI BFF(backend for frontend) 서버를 실행해야 합니다.
2. .env 파일이 프로젝트의 루트에 필요합니다. 파일을 만들고 아래의 내용을 입력하세요.

```text
NEXT_PUBLIC_JWT_ACCESS_TOKEN=access_token
NEXT_PUBLIC_API_BASE_URL=http://localhost:20081
```

3. `npm install` 명령어를 실행하세요.
4. `npm run dev` 명령어를 실행하세요.

## 빌드 방법

린트를 사용하기 때문에 문법에 문제가 있다면 빌드할 수 없습니다.

1. `npm install` 명령어를 실행하세요.
2. `npm run build` 명령어를 실행하세요.

## 프로덕션 실행 방법

1. `npm install` 명령어를 실행하세요.
2. `npm run build` 명령어를 실행하세요.
3. `npm run start` 명령어를 실행하세요.

## 프로젝트 구조

next13을 사용, app 디렉토리를 사용하여 프로젝트를 구성했습니다.

### src

넥스트 프로젝트 소스 디렉토리 입니다.

#### app

디렉토리 구조가 곧 url 입니다.
app/page.tsx는 http://domain.com 과 같습니다.

#### components

프로젝트에서 모듈로 쪼갤 수 있는 부분을 따로 컴포넌트와 했습니다.

#### lib

프로젝트에서 사용할 수 있는 라이브러리를 모아놓은 디렉토리 입니다.
아직까지 별건 없습니다.

#### services

bff 와 통신할때 사용하는 구조체 입니다.
클래스 문법으로 작성하였습니다.

### public

리소스 디렉토리 입니다. /파일이름으로 접근할 수 있습니다.
