"use client"
// Client Components 가 아닌 경우에는 use client를 적어줘야
// usePathname을 사용할 수 있다.
// next.js에선 (모든 페이지, 컴포넌트) 백엔드 차원에서 rendering을 진행한다
// 그 이후 HTML로 변환해서 브라우저에 넘긴다.
// 따라서 Javascript가 비활성화되어있는 시점에서도 기본적인 html은 존재한다.
// 그렇다면 Javascript가 활성화되면 뭐가 다를까?
// 비활성됐을 떄는 a 태그(anchor)를 이용해서 hard navigation으로 작동한다(새로고침)
// 활성화되면 react가 hydrate된다.
// 더 이상 화면 새로고침이 아닌 Link를 통해 빠르게 navigate함
// dummy html -> react load -> initialize -> React App -> controlled by JS(interactive)
// 위에처럼 단순 html을 React applicationdㅡ로 초기화하는 과정을 hydration이라고 한다!
// 근데 hydration은 모든 과정에서 발생하지 않는다. use client가 있는 곳에서만 === 이 파일은 interactive 해야 해
// 이를 통해 다운받은 JS의 양을 줄일 수 있음

// css를 마치 자바스크립트 파일을 받아오듯이 받아오면 된다.
// styles.nav가 실제로는 navigation_nav___kX_6 이런 식으로 찍혀서 className의 중복을 피할 수 있다.

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useState } from "react";
import styles from "../styles/navigation.module.css";

export default function Navigation () {
    const path = usePathname();
    // const [count, setCount] = useState(0);

    return (
        <nav className = {styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥":""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥":""}
                </li>
                {/* <li>
                    <button onClick={() => setCount( (c) => c+1)}>{count}</button>
                </li> */}
            </ul>
        </nav>
    )
}