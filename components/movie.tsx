"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
// useRouter next/router 아니고 next/navigation으로 설정해야 한다.

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}

// prefetch 왜 썼냐?
// 유저가 클릭하기 전에 Next.js가 페이지들을 미리 로드할꺼다
// 이제 스크롤을 내려서 해당 Link가 rendering 되는 순간 미리 로드한다고 생각하면 된다.
// 하지만 DB 부하의 영향이 있을 수 있으므로 신중하게 쓰기 바람
