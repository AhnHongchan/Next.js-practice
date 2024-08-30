
//app/page.tsx - root segment다. '/'의 url을 가짐\
// app 내에 쓰일 폴더명이 곧 url 주소가 된다
// 즉, page.tsx가 없는 폴더도 가능함
// router를 사용해서 routing 하는 기능을 이런 식으로 처리함

import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css"

export const metadata = {
  title: "Home"
};

// API 요청을 처리하는 방식

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    // 1초 동안 로딩 거는 행위
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // fetch된 URL을 자동으로 캐싱시켜준다
    // browser에서 캐싱할 일이 없다(백엔드에서 처리).
    // 그래서 처음에만 로딩이 발생한다
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage () {
  const movies = await getMovies();
  return (
  <div className={styles.container}>
    {movies.map(movie => (
      <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
    ))}
  </div>
  );
}

// route groups는 이런 식"(home)"으로 폴더 이름을 괄호로 묶어줘야한다.
// 괄호로 묶을 경우 폴더명을 기반으로 url을 생성하지 않는다.