// [id]처럼 대괄호 표시한 거: movies/:id 처럼 Dynamic Routes를 만든 것이다.

import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import { getMovie } from "../../../components/movie-info";

interface IParams {
  params: {id: string};
}

export async function generateMetadata ({params: {id}} : IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// 일반적인 metadata와 다르게 동적인 페이지를 위해선 generateMetadata를 사용한다.

// 첫 번쨰 params는 구조 분해
// 두 번쨰 params는 타입 검사
export default async function MovieDetail (
    {params: {id}} : 
    IParams) {
        // 원래 하나씩 비동기 처리하던걸 Promise.all을 쓰면 병렬적으로 처리할 수 있다
        // Promise.all이 array을 반환할거기 때문에 변수를 이렇게 작성한다.
        // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
        // const movie = await getMovie(id);
        // const videos = await getVideos(id);
        return (
        // 위는 병렬적으로 받되 두 작업이 모두 완료 되어야 렌더링되었다.
        // 작업이 완료되는 대로 렌더링하기 위해 suspense를 사용하여 작업하였다.
        // fallback은 렌더링 되기 전 로딩 표시
        // MovieInfo와 MovieVideos는 이전에 이 페이지에 있던 내용을 root의 components 폴더로 옮긴 것

        <div>
            <Suspense fallback = {<h1>Loading Movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback = {<h1>Loading Movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
        )
    }

// { params: { id: '1212' }, searchParams: {} }
// props를 넣어서 콘솔 찍으면 이렇게 나옴
// 추가적으로 뒤에 ?page=2 이런 거 붙이면 searchParams에서 나옴(검색창에서 주로 이용)