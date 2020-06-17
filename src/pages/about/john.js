import React from "react";
import Layout from "../../components/Layout";
import MemberFactory from "../../components/MemberFactory";
import { graphql } from "gatsby";

export const query = graphql`
  {
    file(relativePath: { eq: "john.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const john = ({ data }) => {
  return (
    <Layout>
      <div className='grid-container'>
        <MemberFactory
          image={data.file.childImageSharp.fluid}
          name='John Bitancor'
          position='Software Developer'
          linkText='LinkedIn'
          outsideLink='https://www.linkedin.com/in/john-bitancor-182376157/'></MemberFactory>
      </div>
    </Layout>
  );
};

export default john;
