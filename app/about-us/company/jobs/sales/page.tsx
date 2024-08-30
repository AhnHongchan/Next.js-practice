export default function Page () {
    return <h1>Sales Jobs</h1>
}

// 상위 폴더의 레이아웃을 그대로 받아옴
// next.js는 하위에서 상위 폴더로 이동하면서 레이아웃이 있는 지 확인하고
// 있는 경우 하위 항목에 렌더링 해준다. (실제로는 url 순서대로 쌓임)
// 레이아웃은 중첩 가능