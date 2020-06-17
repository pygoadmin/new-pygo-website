import React from "react";
import styled from "styled-components";

const OutLink = ({ outsideLink, linkText }) => {
  return (
    <OutLinkWrapper href={outsideLink} target='_blank'>
      {linkText}
    </OutLinkWrapper>
  );
};

const OutLinkWrapper = styled.a`
  color: #006b6b;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  :hover {
    color: #26b6bb;
  }
`;

export default OutLink;
