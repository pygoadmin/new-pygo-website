import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='grid-container'>
        <nav>
          <span className='logo-container'>
            <AniLink fade to='/'>
              PYGO Inc.
            </AniLink>
          </span>
          <button>X</button>
          <ul>
            <li>
              <AniLink fade to='/products'>
                Products
              </AniLink>
            </li>
            <li>Industries</li>
            <li>Examples</li>
            <li>Docs & Tools</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 5;
  display: block;
  border-bottom: 1px solid #d8d8d8;

  nav {
    margin: 0.5rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    position: relative;

    .logo-container {
      display: block;
      height: 100%;
      transition: opacity 0.3s linear;
      font-family: liberation-serif, sans-serif;
      font-size: 2rem;
      color: red;
      margin-left: 1rem;
      a {
        color: red;
      }
    }

    button {
      @media (min-width: 1024px) {
        display: none;
      }
      width: 30px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -1rem;
      padding: 1rem;
    }

    ul {
      @media (min-width: 1024px) {
        width: 60%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        left: auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding: 0;
      }

      li {
        position: relative;
        font-family: open-sans, sans-serif;
        @media (min-width: 1024px) {
          width: auto;
          list-style-type: none;
          margin: 20px 0;
          margin-left: 5%;
        }
        a {
          color: #4a4a4a;
        }

        a::after {
          content: "";
          width: 0%;
          position: absolute;
          border-bottom: solid 2px #4a4a4a;
          bottom: -5px;
          left: 0;
          transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }

      li:hover {
        a::after {
          width: 100%;
        }
      }
    }
  }
`;

export default Header;