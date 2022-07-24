## next intro

## .next

- npm run dev 실행시 생성되는 폴더와 파일

## node_modules

- 설치된 npm modules 관련 폴더와 파일

## pages

- 프로젝트에서 화면에 표시될 페이지 관련 폴더
- 페이지를 담당하는 컴포넌트

## public

- 프로젝트에 사용될 Static 한 파일들(이미지 파일 등)이 저장된 폴더

## styles

- CSS 관련 폴더

## .eslintrc.json

- ESLint 설정 파일

## next.config.js

- Next.js 프로젝트 설정 파일

## .gitignore

- git 버전 관리에서 무시하고 싶은 파일 이름을 기록하는 파일

## package-lock.json

- 생성된 node_modules 폴더의 정보

## package.json

- 사용하는 node_modules 정보
- 기본적인 프로젝트에 대한 명세

## tsconfig.json

- npm run dev 실행시 자동으로 생성됩니다.
- Next.js에서 추천 설정 아닌 TS세팅을 커스텀하고 싶으면 tsconfig.json 편집

## next-env.d.ts

- npm run dev 실행시 자동으로 생성됩니다.
  이 파일은 Next.js 유형이 TypeScript 컴파일러에서 선택되도록 합니다.
  제거할 수는 없지만 편집할 수는 있습니다(하지만 필요하지 않음).
  Next.js서 추천 설정한 TS로 만들고 싶으면 next-env.d.ts 편집

# nextJS 공부

react-router-dom 설치 NO!
next.js 에서는 라우터가 pages폴더에서 지원하는 것을 발견 할 수 있습니
next.js에서 pages폴더는 라우터의 기능을 합니다.
파일이름이 곧 주소창 경로!
pages 파일이름이 곧 주소창 경로!
생성한 파일내에 export default function XXX() <-- 함수 이름은 아무거나 지어도 무관하다
대신 파일내에 export default가 꼭 지정되야 함
export default에 대해 개념 공부 필수!? 권장합니다.
참조 : export default 의미
