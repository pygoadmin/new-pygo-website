// packages
import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import ScrollContainer from "react-indiana-drag-scroll";
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
      <ScrollContainer className='scroll-container' vertical={false}>
        <Article
          articleImage={data.allFile.edges[3].node.childImageSharp.fluid}
          articleDate='June 10, 2020'
          articleHeadline='Late Night Tech Demos!'
          articleContent='We tested our custom designed, use-case specific, multi-protocol wireless sensors for #operationalsafety #OEMS #industry40 for a mining client. With LoRaWAN enabled functionality, we achieved 3.7km, non-LoS range with a Cisco gateway. The laptop runs #pygo microservices that do not require access to internet or cloud. Our team has developed front-end GUI and the network stack to support on-premise deployment for network sensitive clients in oil and gas, mining and manufacturing.'
          articleCTA='https://www.linkedin.com/posts/pygo-inc_operationalsafety-oems-industry40-activity-6679537394137620480-Nzeg'></Article>
        <Article
          articleImage={data.allFile.edges[2].node.childImageSharp.fluid}
          articleDate='June 10, 2020'
          articleHeadline='Late Night Tech Demos!'
          articleContent='Late night tech demos! Our team members Koltin Kosik-Harvey John Bitancor
              preparing a demo for a mining client. #digitalization #miningindustry #miningequipment #industry40 '
          articleCTA='https://www.linkedin.com/posts/pygo-inc_digitalization-miningindustry-miningequipment-activity-6676323526183669760-uQ0P'></Article>
        <Article
          articleImage={data.allFile.edges[1].node.childImageSharp.fluid}
          articleDate='June 7, 2020'
          articleHeadline='LoRaWAN solution'
          articleContent='End-to-end, on-premise deployment of LoRaWAN solution for low latency, vendor agnostic (no vendor lock-in), long range, low-power, customer-owned data infrastructure using PYGO Micro-services.'
          articleCTA='https://www.linkedin.com/posts/pygo-inc_smartfactory-offshoredrilling-digitalization-activity-6674460022954708992-DGkS'></Article>

        <Article
          articleImage={data.allFile.edges[0].node.childImageSharp.fluid}
          articleDate='June 1, 2020'
          articleHeadline='Centimeter-level 3D Positioning Using GNSS RTK'
          articleContent="A case-study abstract based on the implementation of PYGO's high precision RTK GNSS solution for an oil and gas customer in Canada has been accepted for presenting at Tailings and Mine Waste 2020 Conference, November 2020, Keystone, Colorado. #oilandgasindustry #miningindustry #offshoredrilling #mining #industry40"
          articleCTA='https://www.linkedin.com/posts/pygo-inc_oilandgasindustry-miningindustry-offshoredrilling-activity-6672898895154180096-Y662'></Article>
      </ScrollContainer>
    </MainNews>
  );
};

const MainNews = styled.section`
  hr {
    margin: 60px auto;
  }

  .scroll-container {
    display: flex;
    flex: 1;
    overflow: auto;
    width: 100%;
    height: 55em;
    margin-bottom: 60px;
  }

  /* tablet */
  @media (max-width: 768px) {
    .news-title {
      text-align: center;
    }

    .scroll-container {
      margin-left: auto;
      margin-right: auto;
      width: 90%;
    }
  }
`;

export default News;
