영화 트레일러 오픈 API를 활용하여 영화 목록을 조회하고 사이트 구현하기

아래 주소를 참고하여 영화 트레일러 API 만들기

[https://developers.themoviedb.org/3/movies/get-movie-videos](https://developers.themoviedb.org/3/movies/get-movie-details)

- API Key를 발급 받아야 사용할 수 있음

1. **react-qurey를 사용하여 데이터를 캐싱할 것**
2. **로딩 중에는 목록 가장 하단 부에 skelton UI를 나타낼 것**
3. **목록을 불러올 때는 react-query의 useInfinitQuery를 사용하여 무한 스크롤링으로 불러울 것**

- https://tanstack.com/query/v4/docs/react/reference/useInfiniteQuery

1. **페이지 구성**
   1. home page
      - 사용 API: /movie/popular
      - 각 영화의 평점 및 짧은 미리보기(소개)가 나타나야함
      - 미리보기는 길이가 길다면 특정 글자 수를 넘어가면 … 으로 표시할 수 있도록 UI를 고려할 것
   2. now playing page
      - 사용 API: /movie/now_playing
   3. upcoming page
      - 사용 API: /movie/upcoming
   4. top-rated pag
      - 사용 API: /movie/top_rated
   5. 영화 상세 페이지
      - 사용 API: /movie/{movie_id}
   6. 검색 결과 페이지
      - 사용 API: /search/movie
2. **스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동**
3. **favicon을 이용하여 웹 표시 아이콘을 수정할 것**

4. **페이지 별 구현 사항**

- movies / 리스트 페이지
  - 한번 당 가져올 데이터 최대 20
  - 제목, 포스터, 미리보기(소개), 별점 표시
  - 포스터 없는 경우, 대체 이미지 사용
- movie / 상세 페이지
  - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
  - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
  - 그 외의 데이터 추가 활용 여부는 자유
- search
  - 제목, 포스터, 미리보기(소개), 별점
  - 포스터 없는 경우, 대체 이미지 사용
