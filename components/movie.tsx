"use client"

import Link from "next/link"
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
// useRouter next/router 아니고 next/navigation으로 설정해야 한다.

interface IMovieProps {
  title: string,
  id: string,
  poster_path: string;
}

export default function Movie ({title, id, poster_path}: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  
  return <div className={styles.movie}>
  <img src={poster_path} alt={title} onClick={onClick}/>
  <Link href={`/movies/${id}`}>{title}</Link>
</div>
}