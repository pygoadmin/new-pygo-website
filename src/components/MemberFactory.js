import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import OutLink from "../components/OutLink";

const MemberFactory = ({
  image,
  name,
  position,
  bio,
  linkText,
  outsideLink,
}) => {
  return (
    <MemberFactoryWrapper>
      <h1 className='title'>Biography</h1>
      <div className='image-container'>
        <Img fluid={image} />
      </div>
      <h1 className='name'>{name}</h1>
      <h2 className='position'>{position}</h2>
      <p>{bio}</p>
      <OutLink linkText={linkText} outsideLink={outsideLink}></OutLink>
    </MemberFactoryWrapper>
  );
};

const MemberFactoryWrapper = styled.div`
  margin: 60px 0;
  padding: 30px 0;

  @media (max-width: 1200px) {
    margin: 60px 45px;
  }
  .title {
    color: #4a4a4a;
    margin-bottom: 30px;
  }

  .image-container {
    margin: 30px 0;
    width: 200px;
    box-shadow: 5px 5px 10px #4a4a4a;
  }

  .name {
  }

  .position {
    margin-bottom: 30px;
  }

  p {
    font-family: open-sans, sans-serif;
    margin-bottom: 15px;
  }
`;

export default MemberFactory;
