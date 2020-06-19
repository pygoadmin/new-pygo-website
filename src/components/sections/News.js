// packages
import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
// components
import Article from "../Article";

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
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
      <div className='articles-grid-container'>
        <Article
          articleImage={data.allFile.edges[0].node.childImageSharp.fluid}
          articleDate='June 1, 2020'
          articleHeadline='Centimeter-level 3D Positioning Using GNSS RTK'
          articleContent="A case-study abstract based on the implementation of PYGO's high precision RTK GNSS solution for an oil and gas customer in Canada has been accepted for presenting at Tailings and Mine Waste 2020 Conference, November 2020, Keystone, Colorado. #oilandgasindustry #miningindustry #offshoredrilling #mining #industry40"
          articleCTA='https://www.linkedin.com/posts/pygo-inc_oilandgasindustry-miningindustry-offshoredrilling-activity-6672898895154180096-Y662'></Article>
        <Article
          articleImage={data.allFile.edges[1].node.childImageSharp.fluid}
          articleDate='June 7, 2020'
          articleHeadline='LoRaWAN solution'
          articleContent='End-to-end, on-premise deployment of LoRaWAN solution for low latency, vendor agnostic (no vendor lock-in), long range, low-power, customer-owned data infrastructure using PYGO Micro-services.'
          articleCTA='https://www.linkedin.com/posts/pygo-inc_smartfactory-offshoredrilling-digitalization-activity-6674460022954708992-DGkS'></Article>
        <Article
          articleImage={data.allFile.edges[2].node.childImageSharp.fluid}
          articleDate='June 10, 2020'
          articleHeadline='Late Night Tech Demos!'
          articleContent='Late night tech demos! Our team members Koltin Kosik-Harvey John Bitancor
              preparing a demo for a mining client. #digitalization #miningindustry #miningequipment #industry40 '
          articleCTA='https://www.linkedin.com/posts/pygo-inc_digitalization-miningindustry-miningequipment-activity-6676323526183669760-uQ0P'></Article>
      </div>
    </MainNews>
  );
};

const MainNews = styled.section`
  .articles-grid-container {
    margin-top: 30px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  hr {
    margin: 60px auto;
  }

  /* tablet */
  @media (max-width: 768px) {
    .news-title {
      text-align: center;
    }
    .articles-grid-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      article {
        width: 80%;
        margin-bottom: 30px;
      }
    }
  }
`;

export default News;
