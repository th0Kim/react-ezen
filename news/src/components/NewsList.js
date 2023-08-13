import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";
import Categories from "./Categories";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://google.com",
//   urlImage: "https://via.placeholder.com/160",
// };

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  // 시작할 때
  useEffect(() => {
    //fetchData에 비동기 데이터 담기
    const fetchData = async () => {
      // 대기중 표시
      setLoading(true);
      // 대기 끝 데이터 불러오기 시작
      try {
        //성공
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b13740f78e7841f8902c8422ce06386a`
        );
        setArticles(response.data.articles);
      } catch (e) {
        //실패
        console.log(e);
      }
      // 데이터 불러오기 완료 후 대기중 표시 제거
      setLoading(false);
    };
    // 변수 실행
    fetchData();
  }, [category]);

  // 대기중 일 때 (초기값 false ->  fetchData(); 실행 -> setLoading(true); 이 때 표시)
  if (loading) {
    return <NewsListBlock>대기중....</NewsListBlock>;
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {/* .map을 돌릴 때 articles가 만약 비어 있으면 에러를 일으킴, 58줄에서 설정 한 것처럼 return null로 반환하여 오류를 일으키지 않는다. */}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
