import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

// 여기서도 캐싱 처리됨
async function getVideos(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // 단순히 에러 던지는 법(페이지는 아무 표시 안 남)
    // 에러 페이지는 따로 만들어야 함
    // movies/[id]/error.tsx에 있음
    // throw new Error('something broke...')
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map(video => (
        <iframe 
        key={video.id} 
        src={`https://youtube.com/embed/${video.key}`}
        allowFullScreen
        title={video.name} />
      ))}
    </div>
  );
}


// 유튜브 주소에 watch 대신 embed를 쓴 이유
// embed
// 동영상을 다른 웹 페이지에 내장할 때 사용
// <iframe> 태그를 사용해 외부 사이트나 애플리케이션에 Youtube 동영상을 직접 임베드 할 수 있음
// allowFullScreen 사용하면 전체 화면 확대 가능
// 본인 사이트에서 일관된 사용자 경험 제공!
// watch
// Youtube 사이트에서 동영상을 재생할 때 사용
// 클릭시 Youtube 웹사이트로 이동하여 동영상 재생
