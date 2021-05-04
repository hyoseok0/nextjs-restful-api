# sample project

### 시작 script
`yarn && yarn dev`
- https://nextjs.org/docs/api-reference/cli#development

### 기술스택
- boiler plate
  - [NextJS](https://nextjs.org/)

- Client  
  - [React](https://reactjs.org/)
  - [PrimeReact](https://www.primefaces.org/primereact/)

- Backend For Frontend Server (BFF)
  - [NodeJS](https://nodejs.org/ko/)

- Client 와 BFF 간 데이터 통신 - restful api
  - [axios](https://github.com/axios/axios)

- bundler
  - [webpack](https://webpack.js.org/)

- Continuous Integration
  - [prettier](https://prettier.io/)
  - [eslint](https://eslint.org/)

- language
  - [Typescript](https://www.typescriptlang.org/)

### directory 구성
- components : React component
- pages : [페이지 React component](https://nextjs.org/docs/basic-features/pages), [api](https://nextjs.org/docs/api-routes/introduction)
- server : BFF 의 api 사용 파일
   - externalAPI 
     - 외부 API 연동 로직
     - 디렉토리 구조
       - 1depth : API 제공 주체(ex - 조직, domain)
       - 2depth : API 종류(ex - path prefix)
   - util : 공통 util
- share : client 와 server 간 공통 로직
   - type : typescript 에서 사용되는 type
- style : style    

---
### base 
https://github.com/vercel/next.js/tree/canary/examples/api-routes-rest

