import { Metadata } from "next"
import Navigation from "../components/navigation"

// Home page에서만 사용할 것 같다면 (home) 폴더의 page.tsx로
// metadata를 옮길 수 있다.

// metadata에 있는 데이터로 head에 입력함
// metadata는 merge 가능
// 페이지나 레이아웃에서만 (컴포넌트 불가) metadata 가능
// server 단위에서 처리됨 (not client)

// template과 default를 이용해 metadata를 url마다 변경할 수 있다.
// %s에 하위 metadatda에 있는 정보들이 들어감
// 하위 폴더에 metadata에 대한 정의가 없는 경우 default 값이 상단에 표시된다.
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Home",
  },
  description: "The best Movies on the best framework",
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}

// 1. rendering 전에 layout 컴포넌트로 먼저 감
// 2. Layout 컴포넌트를 렌더링하고 url을 인식함
// 3. url로 인식한 page 컴포넌트가 존재

{/* <Layout>
  <AboutUs />
</Layout> */}

// 기존에 페이지에 존재했던 Navigation을 Layout으로 옮김 = 여기서 전역으로 처리 가능
