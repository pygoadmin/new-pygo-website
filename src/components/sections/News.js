// packages
import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
// components
import Article from "../Article";
// icons
import { AiOutlineRight } from 'react-icons/ai';

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
      <div className='carousel-container'>
        <Carousel
          centered
          infinite
          dots
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
          <div className='carousel-item'>
            <Article
              articleImage={data.allFile.edges[3].node.childImageSharp.fluid}
              articleDate='June 18, 2020'
              articleHeadline='Testing Sensor Range'
              articleContent='We tested our custom designed, use-case specific, multi-protocol wireless sensors for #operationalsafety #OEMS #industry40 for a mining client. With LoRaWAN enabled functionality, we achieved 3.7km, non-LoS range with a Cisco gateway. The laptop runs #pygo microservices that do not require access to internet or cloud. Our team has developed front-end GUI and the network stack to support on-premise deployment for network sensitive clients in oil and gas, mining and manufacturing.'
              articleCTA='https://www.linkedin.com/posts/pygo-inc_operationalsafety-oems-industry40-activity-6679537394137620480-Nzeg'></Article>
          </div>
          <div className='carousel-item'>
            <Article
              articleImage={data.allFile.edges[2].node.childImageSharp.fluid}
              articleDate='June 10, 2020'
              articleHeadline='Late Night Tech Demos!'
              articleContent='Late night tech demos! Our team members Koltin Kosik-Harvey John Bitancor
              preparing a demo for a mining client. #digitalization #miningindustry #miningequipment #industry40 '
              articleCTA='https://www.linkedin.com/posts/pygo-inc_digitalization-miningindustry-miningequipment-activity-6676323526183669760-uQ0P'></Article>
          </div>
          <div className='carousel-item'>
            <Article
              articleImage={data.allFile.edges[1].node.childImageSharp.fluid}
              articleDate='June 7, 2020'
              articleHeadline='LoRaWAN solution'
              articleContent='End-to-end, on-premise deployment of LoRaWAN solution for low latency, vendor agnostic (no vendor lock-in), long range, low-power, customer-owned data infrastructure using PYGO Micro-services.'
              articleCTA='https://www.linkedin.com/posts/pygo-inc_smartfactory-offshoredrilling-digitalization-activity-6674460022954708992-DGkS'></Article>
          </div>
          <div className='carousel-item'>
            <Article
              articleImage={data.allFile.edges[0].node.childImageSharp.fluid}
              articleDate='June 1, 2020'
              articleHeadline='Centimeter-level 3D Positioning Using GNSS RTK'
              articleContent="A case-study abstract based on the implementation of PYGO's high precision RTK GNSS solution for an oil and gas customer in Canada has been accepted for presenting at Tailings and Mine Waste 2020 Conference, November 2020, Keystone, Colorado. #oilandgasindustry #miningindustry #offshoredrilling #mining #industry40"
              articleCTA='https://www.linkedin.com/posts/pygo-inc_oilandgasindustry-miningindustry-offshoredrilling-activity-6672898895154180096-Y662'></Article>
          </div>
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
    position: relative;
    .carousel-item {
      height: 100%;
      min-width: 350px;
      margin-right: 30px;
      margin-left: 30px;
    }

    .BrainhubCarousel__dots{
      position: absolute;
      top: -25px;
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
      margin-bottom: 30px;
    }

    .BrainhubCarousel__arrows{
      background-color: white;

      span{
        border-color: black;
      }
    }

    .BrainhubCarousel__arrows:visited{
      background-color: red;
    }
  }
`;

export default News;
