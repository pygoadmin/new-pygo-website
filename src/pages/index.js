import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

import { graphql } from "gatsby";
// things container
import OAG from "../images/things-container/oil-and-gas.png";
import MM from "../images/things-container/mining-metal.png";
import PMC from "../images/things-container/pipeline-midstream-chemical.png";
import RE from "../images/things-container/renewable-energy.png";
import MWW from "../images/things-container/manufacturing-waste-water.png";
import PFP from "../images/things-container/pharmaceutical-food-process.png";

import Test from "../images/0.jpeg";

// components
import Article from "../components/Article";
import MainBackgroundSlider from "../components/MainBackgroundSlider";

export const query = graphql`
  query {
    test: allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
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
`;

export default function Home(props) {
  return (
    <div>
      <Layout>
        <MainHero className='grid-container'>
          <div className='introduction'>
            <h1>Empowering Legacy Plant Floor, Equipment, and Processes</h1>
            <p>
              Enable connectivity, intelligence and machine learning
              capabilities to every field device
            </p>
          </div>
          <div className='slideshow'>
            <MainBackgroundSlider />
          </div>
        </MainHero>
        <MainIntro className='grid-container'>
          <p>
            PYGO is a leading technology provider enabling Industrical Internet
            of Things (IIoT) and Edge Intelligence for safe, efficient and
            reliable industrial operations.
          </p>
          <div className='things-container'>
            <div className='grid-item'>
              <h2>Oil and Gas</h2>
              <img src={OAG} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Mining {"\n"} Metal</h2>
              <img src={MM} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Pipeline Midstream Chemical</h2>
              <img style={{ marginBottom: "10px" }} src={PMC} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Renewable Energy</h2>
              <img src={RE} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Manufacturing Waste/Water</h2>
              <img src={MWW} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Pharmaceutical Food Process</h2>
              <img src={PFP} alt='' />
            </div>
          </div>
          <hr />
        </MainIntro>
        <MainSubIntro className='grid-container'>
          <div className='row'>
            <h2>Flexible enough for startups and large-scale enterprises</h2>
            <a href=''>See our products</a>
          </div>
          <div className='image-container'>
            <img src={Test} alt='' />
          </div>
        </MainSubIntro>
        <MainNews className='grid-container'>
          <hr />
          <h2>News & Announcements</h2>
          <div className='articles-grid-container'>
            {console.log(props.data.test)}
            <Article
              articleImage={props.data.test.edges[0].node.childImageSharp.fluid}
              articleDate='June 1, 2020'
              articleHeadline='Centimeter-level 3D Positioning Using GNSS RTK'
              articleContent="A case-study abstract based on the implementation of PYGO's high precision RTK GNSS solution for an oil and gas customer in Canada has been accepted for presenting at Tailings and Mine Waste 2020 Conference, November 2020, Keystone, Colorado. #oilandgasindustry #miningindustry #offshoredrilling #mining #industry40"
              articleCTA='https://www.linkedin.com/posts/pygo-inc_oilandgasindustry-miningindustry-offshoredrilling-activity-6672898895154180096-Y662'></Article>
            <Article
              articleImage={props.data.test.edges[1].node.childImageSharp.fluid}
              articleDate='June 7, 2020'
              articleHeadline='LoRaWAN solution'
              articleContent='End-to-end, on-premise deployment of LoRaWAN solution for low latency, vendor agnostic (no vendor lock-in), long range, low-power, customer-owned data infrastructure using PYGO Micro-services.'
              articleCTA='https://www.linkedin.com/posts/pygo-inc_smartfactory-offshoredrilling-digitalization-activity-6674460022954708992-DGkS'></Article>
            <Article
              articleImage={props.data.test.edges[2].node.childImageSharp.fluid}
              articleDate='June 10, 2020'
              articleHeadline='Late Night Tech Demos!'
              articleContent='Late night tech demos! Our team members Koltin Kosik-Harvey John Bitancor
              preparing a demo for a mining client. #digitalization #miningindustry #miningequipment #industry40 '
              articleCTA='https://www.linkedin.com/posts/pygo-inc_digitalization-miningindustry-miningequipment-activity-6676323526183669760-uQ0P'></Article>
          </div>
        </MainNews>
      </Layout>
    </div>
  );
}

const MainHero = styled.section`
  height: 40rem;
  margin-top: 60px;
  margin-bottom: 60px;
  .introduction {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    background: rgb(248, 248, 248);
    z-index: 4;
    left: 0;
    max-width: 40%;
    padding: 60px;

    h1 {
      font-size: 2.5rem;
      padding-bottom: 1rem;
      color: #4a4a4a;
      font-weight: 200;
    }
    p {
      font-size: 1.2rem;
      color: #878787;
      font-family: open-sans, sans-serif;
    }
  }
  .slideshow {
    height: 100%;
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
  }

  /* tablet */
  @media (max-width: 768px) {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    background: rgb(248, 248, 248);
    .introduction {
      top: 0px;
      max-width: 100%;
      transform: translateY(0%);
    }
    .slideshow {
      z-index: 4;
      top: 20rem;
      left: 0;
      width: 100%;
      height: 50%;
    }
  }

  /* phone */
  @media (max-width: 600px) {
    .introduction {
      padding: 60px 30px;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

const MainIntro = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    line-height: 2.3rem;
    font-size: 1.2rem;
    color: black;
    font-family: open-sans, sans-serif;
    width: 60%;
    font-weight: light;
  }

  .things-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 75px;
    margin: 30px auto 60px auto;

    @media (max-width: 750px) {
      column-gap: 0px;
    }

    .grid-item {
      color: #878787;
      width: 250px;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      h2 {
        font-size: 1.3rem;
        text-align: center;
      }
      img {
        margin-top: -50px;
        width: 64px;
        height: 64px;
      }

      @media (max-width: 880px) {
        width: 175px;
        h2 {
          font-size: 1.2rem;
        }
      }
      @media (max-width: 490px) {
        width: 120px;
        h2 {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

const MainSubIntro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;

  .row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 30px;

    a {
      color: #26b6bb;
      font-family: open-sans, sans-serif;
    }
  }
  .image-container {
    width: 80%;
    height: 50vh;
    text-align: center;

    img {
      width: 100%;
    }
  }
`;

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
`;
