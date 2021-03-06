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
        "excerpt":"1. 화면 구성 간단한 화면 구성이다. 제일 먼저 상품의 이름을 입력할 수 있다. 그 아래에는 Quill Editor를 활용하여 상세정보를 입력할 수 있다. 오른쪽 하단엔 가격정보를 입력할 수 있는 칸이 있으며 Number Format을 활용해 자동으로 세자리마다 “,” 삽입, “원” 삽입 기능을 구현했다. 상품의 대표 이미지는 추후 메인화면에 나타나질 thumbnail이다. 상품 검색에...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/insert",
        "teaser": null
      },{
        "title": "나이값",
        "excerpt":"나이값(rpod. Khalibeats) 블로그에 하나 정도는 다른 주제의 포스트를 하고 싶어서 평상시 취미로 만드는 자작곡 중 하나를 올립니다. 사실 실력이 나쁘고 장비도 나쁘기 때문에 음질도 별로지만 꾸준히 음악을 하는 이유는 나를 표현하는데 이만한 것이 없다고 생각했기 떄문이다. 들어주는 사람은 없지만 그래도 스트레스 해소나 생각 정리에는 굉장히 도움이 된다. 이번에 만든건 나이값이란...","categories": ["음악"],
        "tags": ["음악","힙합"],
        "url": "https://so-woon-1221.github.io/%EC%9D%8C%EC%95%85/%EB%85%B8%EB%9E%98%ED%85%8C%EC%8A%A4%ED%8A%B8/",
        "teaser": null
      },{
        "title": "쇼핑몰 - 제품 상세 페이지",
        "excerpt":"1. 화면 구성 기본적인 화면 구성이다. 상단에는 헤더가 존재하며 미완성된 상태이긴 하지만 메인페이지로 이동 가능한 로고와 카테고리 메뉴, 검색창, 로그인 버튼이 있다. 하단에는 대표이미지로 설정한 이미지와 상품 이름, 가격, 태그가 표시된다. 구매와 장바구니 버튼이 존재하 그 하단엔 상세설명이 나오게 된다. 2. 상세 설명 /modules/item.js import { createAction, handleActions } from...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/infopage",
        "teaser": null
      },{
        "title": "쇼핑몰 - 서버 데이터 전송",
        "excerpt":"1. 개요 axios를 사용하여 백엔드와 통신한다. 그러나 백엔드는 Spring으로 구성되어 8080포트를 사용하고 프론트엔드는 3000포트를 사용해 CORS 이슈가 발생하게 된다. 따라서 proxy 설정을 통 이를 해결한다. 2. 상세 설명 package.json ... \"proxy\": \"http://localhost:8080/\" ... 프록시 proxy 설정을 spirng의 포트인 8080으로 설정한다. /lib/api/client.js import axios from 'axios' const client = axios.create(); export...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/axios",
        "teaser": null
      },{
        "title": "쇼핑몰 - 메인화면",
        "excerpt":"1. 화면구성 그리드뷰를 활용해서 3개씩 격자형태로 표시되게 했다. 각 항목들은 대표 이미지, 상품명, 가격, 태그를 갖고있다. 해당 아이템을 클릭할 시 제품 상세 페이지로 이동한다. 2. 상세 설명 modules/list.js import { createAction, handleActions } from 'redux-actions'; import createRequestSaga, { createRequestActionTypes, } from '../lib/createRequestSaga'; import * as itemAPI from '../lib/api/items'; import {...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/mainpage",
        "teaser": null
      },{
        "title": "쇼핑몰 - DB 구성",
        "excerpt":"1. 개요 DB는 Mongo DB를 활용하여 구성했다. Spring Boot에 포함되어있는 MongoDB를 gradle에 추가해준다. implementation ('org.springframework.boot:spring-boot-starter-data-mongodb') Web, Service, Repository로 계층을 구분하여 트랜잭션을 수행한다. 2. 상세 설명 domain/item/Items.java @Document(collection = \"items\") @Getter public class Items{ @Id private String id; private final String name; private final String content; private final String price; private...","categories": ["Shopping mall"],
        "tags": ["Shopping mall","쇼핑몰","프로젝트"],
        "url": "https://so-woon-1221.github.io/shoppingmall/backDB",
        "teaser": null
      },{
        "title": "또우니 논문",
        "excerpt":"1. 개요 대학생 4학년 시절 졸업작품 및 공모전 제출작으로 또우니라는 실시간 아기 울음 분석 시스템을 개발했다. 개발 기간은 2018.03 ~ 2018.09 약 6개월로 담담한 파트는 아기 울음 분석 알고리즘 및 안드로이드 앱 개발이었다. 개발환경은 python(pycharm), android(android studio), firebase 등이다. 결과적으로 숭실대학교 소프트웨어 공모전에서 수상을 했다. 6개월동안 정말 치열하게 개발했고 공모전에서도...","categories": ["또우니"],
        "tags": ["또우니","프로젝트"],
        "url": "https://so-woon-1221.github.io/%EB%98%90%EC%9A%B0%EB%8B%88/%EB%98%90%EC%9A%B0%EB%8B%88-%EB%85%BC%EB%AC%B8/",
        "teaser": null
      }]
