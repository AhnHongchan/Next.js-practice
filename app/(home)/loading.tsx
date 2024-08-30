// fetch하는 도중에 로딩에 대비해 loading.tsx를 만들어준다.
// layout과 navigation 다음에 보내는 거라고 생각하면 된다.
// 아직 백엔드 작업이 끝나지 않았음을 뜻함
// 이렇게 로딩을 따로 보여줄 수 있는 이유
// next.js는 페이지를 작은 html로 나눠서 준비된 부분을 브라우저에 넘겨줄 수 있음
// 삼항 연산자로 로딩 처리하는 걸 이런 식으로 표현했다고 생각하면 될 것 같음

export default function Loading() {
 return <h2>Loading...</h2>   
}