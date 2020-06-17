import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import InLink from "../components/InLink";

const about = () => {
  return (
    <Layout>
      <AboutPage className='grid-container'>
        <h1>Advisors</h1>
        <div className='group-container'>
          <div className='member'>
            <h2 className='name'>Hemi Thaker</h2>
            <InLink to='/about/hemi'>READ BIO</InLink>
          </div>
          <div className='member'>
            <h2 className='name'>Sirish L. Shah, Ph.D., P.Eng.</h2>
            <InLink to='/about/sirish'>READ BIO</InLink>
          </div>
        </div>
        <h1>Team</h1>
        <div className='group-container'>
          <div className='member'>
            <h2 className='name'>Sridhar Dasani</h2>
            <InLink to='/about/sridhar'>READ BIO</InLink>
          </div>
          <div className='member'>
            <h2 className='name'>Koltin Kosik-Harvey</h2>
            <InLink to='/about/koltin'>READ BIO</InLink>
          </div>
          <div className='member'>
            <h2 className='name'>John Bitancor</h2>
            <InLink to='/about/john'>READ BIO</InLink>
          </div>
        </div>
      </AboutPage>
    </Layout>
  );
};

const AboutPage = styled.div`
  margin-top: 60px;
  padding: 60px 0;

  @media (max-width: 920px) {
    h1 {
      margin-left: 30px;
    }
  }

  .group-container {
    margin: 30px 0;
    display: flex;
    justify-content: center;

    @media (max-width: 920px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .member {
    width: 600px;
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .member::after {
    content: "";
    width: 50%;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd3d1;
  }
`;

export default about;
