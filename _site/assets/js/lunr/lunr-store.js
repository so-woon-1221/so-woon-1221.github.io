var store = [{
        "title": "github.io 블로그 시작",
        "excerpt":"1. test   github 블로그를 활용해 개발과 취미생활을 포스팅할 예정입니다. 이 포스트는 테스트용입니다.  ","categories": ["Blog"],
        "tags": ["Blog","블로그"],
        "url": "https://so-woon-1221.github.io/blog/first-post/",
        "teaser": null
      },{
        "title": "쇼핑몰 소개",
        "excerpt":"링크 Github 1. 계기 React와 Spring을 교재를 활용하여 2달정도 공부했다. 두 가지 교재 모두 최종적으로는 게시판을 만드는것이 목표였다. React를 공부할때는 프론트엔드는 React, 백엔드는 Koa를 활용했다. Spring을 공부할때는 프론트엔드는 mustache, 백엔드는 Spring Boot를 활용했다. 결론적으로 React와 Spring을 모두 활용해서 프로젝트를 진행하고 싶은 생각이 들었고 데이터베이스로는 여태껏 접해왔던 SQL같은 RDB보다 MongoDB를 사용해보고싶었다....","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmallindex/",
        "teaser": null
      },{
        "title": "쇼핑몰 - 상품등록",
        "excerpt":"1. 구현 화면 간단한 화면 구성이다. 제일 먼저 상품의 이름을 입력할 수 있다. 그 아래에는 Quill Editor를 활용하여 상세정보를 입력할 수 있다. 오른쪽 하단엔 가격정보를 입력할 수 있는 칸이 있으며 Number Format을 활용해 자동으로 세자리마다 “,” 삽입, “원” 삽입 기능을 구현했다. 상품의 대표 이미지는 추후 메인화면에 나타나질 thumbnail이다. 상품 검색에...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/insert",
        "teaser": null
      },{
        "title": "쇼핑몰 - 서버 데이터 전송",
        "excerpt":"1. 개요 axios를 사용하여 백엔드와 통신한다. 그러나 백엔드는 Spring으로 구성되어 8080포트를 사용하고 프론트엔드는 3000포트를 사용해 CORS 이슈가 발생하게 된다. 따라서 proxy 설정을 통 이를 해결한다. 2. 상세 설명 package.json ... \"proxy\": \"http://localhost:8080/\" ... 프록시 proxy 설정을 spirng의 포트인 8080으로 설정한다. /lib/api/client.js import axios from 'axios' const client = axios.create(); export...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/axios",
        "teaser": null
      }]
