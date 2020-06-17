import React from "react";
import Layout from "../../components/Layout";
import MemberFactory from "../../components/MemberFactory";
import { graphql } from "gatsby";

export const query = graphql`
  {
    file(relativePath: { eq: "sridhar.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const sridhar = ({ data }) => {
  return (
    <Layout>
      <div className='grid-container'>
        <MemberFactory
          image={data.file.childImageSharp.fluid}
          name='Sridhar Dasani'
          position='CEO, Founder'
          linkText='LinkedIn'
          outsideLink='https://www.linkedin.com/in/sridhardasani/'></MemberFactory>
      </div>
    </Layout>
  );
};

export default sridhar;
