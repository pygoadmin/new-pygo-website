import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { BsArrowUpRight } from "react-icons/bs";

const Article = ({
  articleImage,
  articleDate,
  articleHeadline,
  articleContent,
  articleCTA,
}) => {
  return (
    <ArticleWrapper>
      <div className='article-header'>
        <Img className='article-image' fluid={articleImage} />
        {/* <img src={articleImage} alt='' /> */}
      </div>
      <div className='article-content'>
        <span className='content-date'>{articleDate}</span>
        <h2 className='content-headline'>{articleHeadline}</h2>
        <p className='content-body'>{articleContent}</p>
        <a className='content-link' target='_blank' href={articleCTA}>
          <button className='content-cta'>
            <BsArrowUpRight />
            Read More
          </button>
        </a>
      </div>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.article`
  width: 30%;
  min-height: 50rem;
  display: flex;
  flex-direction: column;

  .article-header {
    background: #878787;
    height: 15rem;

    .article-image {
      width: 100%;
      height: 100%;
    }
  }

  .article-content {
    flex-grow: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    border: 1px solid #d8d8d8;
    border-top: none;
    .content-headline {
      margin-top: 2.5rem;
      margin-bottom: 0.4rem;
      line-height: 2.2rem;
    }
    .content-body {
      font-family: open-sans, sans-serif;
      flex-grow: 1;
    }
    .content-link {
      text-decoration: none;
      svg {
        transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        font-size: 1.7rem;
        color: #1f6b68;
      }
      button {
        transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        display: flex;
        align-items: center;
        color: #1f6b68;
        background: transparent;
        padding: 2rem 0;
        cursor: pointer;
        border: none;
        width: 100%;
        margin-right: auto;
        text-align: left;
      }
    }
    .content-link:hover {
      svg {
        color: #26b6bb;
      }
      button {
        color: #26b6bb;
      }
    }
  }

  @media (max-width: 768px) {
    min-height: 40rem;
  }
`;

export default Article;
