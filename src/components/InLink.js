import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

const InLink = ({ children, to }) => {
  return (
    <InLinkWrapper>
      <Link to={to}>{children}</Link>
      {/* <IoIosArrowForward /> */}
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
