// packages
import React, { useState, useEffect } from "react";
import styled, {keyframes} from "styled-components";
// things container
import OAG from "../images/things-container/oil-and-gas.png";
import MM from "../images/things-container/mining-metal.png";
import PMC from "../images/things-container/pipeline-midstream-chemical.png";
import RE from "../images/things-container/renewable-energy.png";
import MWW from "../images/things-container/manufacturing-waste-water.png";
import PFP from "../images/things-container/pharmaceutical-food-process.png";

import Test from "../images/0.jpeg";
// components
import MainBackgroundSlider from "../components/MainBackgroundSlider";

// sections
import News from "../components/sections/News";
import Layout from "../components/Layout";

export default function Home() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);

    return () => {
      setInProp(false);
    }
  }, []);

  return (
    <div>
      <Layout>
        <MainHero className='grid-container'>
            <div className={`introduction ${inProp ? "animate" : ""} `}>
              <h1 className={`${inProp ? "moto-animate" : ""} `}>Empowering Legacy Plant Floor, Equipment, and Processes</h1>
              <p>
                Enable connectivity, intelligence and machine learning
                capabilities to every field device
              </p>
            </div>
            <div className={`slideshow ${inProp ? "slideshow-animation" : ""} `}>
              <MainBackgroundSlider />
            </div>
        </MainHero>
        <MainIntro className='grid-container'>
          <p>
            PYGO is a leading technology provider enabling Industrial Internet
            of Things (IIoT) and Edge Intelligence for safe, efficient and
            reliable industrial operations.
          </p>
          <div className='things-container'>
            <div className='grid-item'>
              <h2>Oil and Gas</h2>
              <img src={OAG} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Mining/Metal</h2>
              <img src={MM} alt='' />
            </div>
            <div className='grid-item'>
              <h2>Pipeline Midstream/Chemical</h2>
              <img src={PMC} alt='' />
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
              <h2>Pharmaceutical/Food Process</h2>
              <img src={PFP} alt='' />
            </div>
          </div>
          <hr />
        </MainIntro>
        <MainSubIntro className='grid-container'>
          <div className='row'>
            <h2>
              Customized hardware and software for niche industrial use-cases
            </h2>
            <a href='/'>See our products</a>
          </div>
          <div className='image-container'>
            <img src={Test} alt='' />
          </div>
        </MainSubIntro>
        <News />
      </Layout>
    </div>
  );
}

const MainHeroKeyframes = keyframes`
  0%{
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(-40%);
    opacity: 1;
  }
`

const MotoKeyframes = keyframes`
  from{
    transform: translateY(10%);
    opacity: 0;
  }
  to{
    opacity: 1;
    transform: translateY(0%);
  }
`

const SlideShowKeyframes = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const MainHero = styled.section`
  height: 40rem;
  margin-top: 60px;
  margin-bottom: 60px;
  
  .animate{
    animation: ${MainHeroKeyframes} 0.4s ease-out;
    animation-fill-mode: forwards;
  }

  .introduction {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    background: rgb(248, 248, 248);
    z-index: 4;
    left: 0;
    max-width: 40%;
    padding: 60px;

    .moto-animate{
      animation: ${MotoKeyframes} 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
      animation-fill-mode: forwards;
    }

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

  .slideshow.slideshow-animation{
    animation: ${SlideShowKeyframes} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0.2s;
    animation-fill-mode: forwards;
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

  @media (max-width: 1280px) {
    p {
      margin-left: 60px;
    }
  }

  /* phone */
  @media (max-width: 600px) {
    p {
      margin-left: 30px;
      line-height: 1.6rem;
      width: 90%;
    }
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

  a {
    text-decoration: none;
  }

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

  /* tablet */
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      width: 80%;
    }

    .image-container {
      height: 35vh;
    }
  }

  /* phone */
  @media (max-width: 600px) {
    .image-container {
      height: 25vh;
    }
  }

  @media (max-width: 450px) {
    .image-container {
      height: 15vh;
    }
  }
`;
