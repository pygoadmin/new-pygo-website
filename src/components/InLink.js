import React from "react";
import styled from "styled-components";
import TransitionLink from "gatsby-plugin-transition-link";

const InLink = ({ children, to }) => {
  return (
    <InLinkWrapper>
      <TransitionLink
        to={to}
        exit={{
          length: 0.5,
        }}
        entry={{ delay: 0.25 }}>
        {children}
      </TransitionLink>
    </InLinkWrapper>
  );
};

const InLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  :hover {
    color: red;
  }
  a {
    font-family: open-sans, sans-serif;
    color: #006b6b;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    text-decoration: none;
  }
  a:visited {
    color: #006b6b;
  }
  a:hover {
    color: #26b6bb;
  }
`;

export default InLink;
