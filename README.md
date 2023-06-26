<div>
  <p>개인 프로젝트</p>
  <h2>🎬 영화 트레일러 오픈 api를 사용해서 영화 목록을 조회 사이트 구현</h2>
  <p>작업 기간 : 2023/06/21 ~ 2023/06/26</p>

  <br/>
  <h4>✧ 프로젝트 소개 및 개요 ✧</h4>
  <p>오픈 영화 api 사이트인 themoviedb의 api를 사용해 영화를 원하는 순위에 따라(인기순/평점순/현재 상영작/개봉 예정작) 보여주는 사이트를 만들었습니다. 메인 페이지에는 추천 영화를 보여주는 이미지 캐루셀이 들어가있으며, 헤더의 검색바에서 원하는 영화를 검색할 수도 있습니다. 각각의 영화를 누르면 해당 영화를 소개해주는 디테일 페이지로 이동합니다. </p>
</div>

<h4>배포 주소</h4>
vercel : 
https://movie-api-site-r5p2dbcs5-toy2.vercel.app/movie/popular

<h4>✧ 시연 영상 ✧</h4>


<h4>✧ 주요 기능 ✧</h4>
<p>react-query를 사용해서 api의 데이터를 관리하였습니다. 또한 데이터 패칭 상태를 query에서 받아와 데이터 패칭 상태를 보여주었습니다.<br/>
recoil이라는 전역 상태 라이브러리를 사용해서 받아온 data(영화 리스트)를 관리하였습니다. 무한 스크롤 기능을 custom hook으로 만들어서 사용하였습니다. <br/> 검색 기능 또한 react-query를 사용해서 만들었습니다. axios 로직은 apis라는 폴더에 따로 저장해 로직의 재사용성을 높였습니다.</p>

<h4>✧ 사용 라이브러리 ✧</h4>
(주요 데이터 관련 라이브러리)
<br/>
react-router-dom
@tanstack/react-query
recoil
axios
<br/>
(스타일 관련 라이브러리)
<br/>
react-slick
react-icons
styled-components


<h4>✧ 폴더 구조 ✧</h4>

```javascript

-apis
  -@core.js
  -movie.api.js
-atom
  -movie.atom.js
-component
  -@common
    -ImgSlider.js
    -MovieList.js
    -OneMovie.js
    -RatingStar.js
    -SearchBar.js
    -TopButton.js
  -layout
    -Header.js
    -index.js
  -hooks
    -UseInfinite.js
  -pages
    -detail
      -Detail.js
    -error
      -Error.js
    -fetching
      -Loading.js
      -NoData.js
    -search
      -Search.js
  -routes
    -Routing.js
  -styles
    -Common.js
    -Theme.js

```

