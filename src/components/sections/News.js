// packages
import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
// components
import Article from "../Article";

const News = () => {
  const data = useStaticQuery(graphql`
  
    {
      allContentfulLinkedInArticles(sort:{fields: articleDate order:DESC}) {
        edges {
          node {
            articleHeadline
            articleContent {
              articleContent
            }
            articleDate
            articleImage {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  return (
    <MainNews className='grid-container'>
      <hr />
      <h2 className='news-title'>News & Announcements</h2>
      <div className='carousel-container'>
        <Carousel
          dots
          infinite
          slidesPerPage={3}
          breakpoints={{
            768: {
              slidesPerPage: 1,
              arrows: true,
            },
            1060: {
              slidesPerPage: 2,
              arrows: false,
            },
          }}>
          {data.allContentfulLinkedInArticles.edges.map((i) => {
            return (
              <div key={i.node.id} className='carousel-item'>
                <Article
                  articleImage={i.node.articleImage.fluid}
                  articleDate={i.node.articleDate}
                  articleHeadline={i.node.articleHeadline}
                  articleContent={i.node.articleContent.articleContent}
                  articleCTA={i.node.articleCTA}></Article>
              </div>
            );
          })}
        </Carousel>
      </div>
    </MainNews>
  );
};

const MainNews = styled.section`
  hr {
    margin: 60px auto;
  }

  .carousel-container {
    margin-bottom: 90px;
    position: relative;
    .carousel-item {
      height: 100%;
      min-width: 350px;
      margin-right: 30px;
      margin-left: 30px;
    }

    .BrainhubCarousel__dots{
      position: absolute;
      top: -45px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .news-title {
    margin-bottom: 30px;
  }

  /* tablet */
  @media (max-width: 768px) {
    .news-title {
      text-align: center;
      margin-bottom: 50px;
    }
    .BrainhubCarousel__arrows {
      background-color: white;

      span {
        border-color: black;
      }
    }

    .BrainhubCarousel__arrows:visited {
      background-color: white;
    }
    .BrainhubCarousel__arrows:hover:enabled {
      background-color: white;
      span {
        border-color: #1f6b68;
      }
    }
  }

  /* phone */
  @media (max-width: 450px){
    .article-header{
      transform: scale(0.8)
    }
    .article-content{
      border: none;
    }
  }
`;

export default News;
