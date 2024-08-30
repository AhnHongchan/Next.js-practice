import { API_URL } from "../app/(home)/page";

// 여기서도 캐싱 처리됨
async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // 단순히 에러 던지는 법(페이지는 아무 표시 안 남)
    // 에러 페이지는 따로 만들어야 함
    // movies/[id]/error.tsx에 있음
    // throw new Error('something broke...')
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({id} : {id: string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}