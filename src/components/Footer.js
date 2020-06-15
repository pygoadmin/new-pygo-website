import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='grid-container'>
        <div className='left-section'>
          <ul className='link-section'>
            <li>
              <AniLink to='/'>About PYGO</AniLink>
            </li>
            <li>
              <AniLink to='/'>News</AniLink>
            </li>
            <li>
              <AniLink to='/'>Terms of service</AniLink>
            </li>
            <li>
              <AniLink to='/'>Privacy policy</AniLink>
            </li>
            <li>
              <AniLink to='/'>Case Studies</AniLink>
            </li>
            <li>
              <AniLink to='/'>Contact sales</AniLink>
            </li>
            <li>
              <AniLink to='/'>Legal</AniLink>
            </li>
          </ul>
          <h1>PYGO Inc.</h1>
          <p>Copyright 2020. All rights reserved</p>
        </div>
        <form className='form-section' action=''>
          <h2>Stay up-to-date</h2>
          <p>Sign up to receive our newsletter</p>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Company(Optional)' />
          <input type='text' placeholder='Email' />
          <a href='' target='_blank' className='button'>
            Subscribe
          </a>
        </form>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 120px 0px;
  background: #4a4a4a;
  color: #fff;

  .grid-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .left-section {
      h1 {
        color: white;
        font-family: liberation-serif, sans-serif;
        font-weight: lighter;
      }
      flex-grow: 3;
      padding: 2rem;

      .link-section {
        margin-bottom: 60px;

        li {
          position: relative;
          font-family: open-sans, sans-serif;
          @media (min-width: 1024px) {
            width: inherit;
            list-style-type: none;
            margin: 20px 0;
          }
          a {
            color: white;
            border-bottom: solid 2px transparent;
            transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
        }

        li:hover {
          a {
            border-bottom: solid 2px white;
          }
        }
      }
    }

    .form-section {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 1rem 3rem 1rem 9rem;
      border-left: solid 1px grey;

      p {
        margin-bottom: 1.5rem;
      }

      input {
        border-radius: 0;
        background: transparent;
        height: 2.5rem;
        font-size: 0.8rem;
        font-style: italic;
        margin-bottom: 1.5rem;
        border: none;
        border-bottom: 1px solid rgba(231, 230, 228, 0.6);
        color: #fff;
        transition: border 0.2s linear;
        width: 100%;
        font-family: open-sans, sans-serif;
      }

      input:focus {
        border-bottom: 1px solid #fff;
      }
    }
  }
`;

export default Footer;
