import React from "react";
import Layout from "../../../components/Layout";
import MemberFactory from "../../../components/MemberFactory";
import { graphql } from "gatsby";

export const query = graphql`
  {
    file(relativePath: { eq: "koltin.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const koltin = ({ data }) => {
  return (
    <Layout>
      <div className='grid-container'>
        <MemberFactory
          image={data.file.childImageSharp.fluid}
          name='Koltin Kosik-Harvey'
          email='koltinkh@pygo.io'
          position='Firmware Developer'
          linkText='LinkedIn'
          outsideLink='https://www.linkedin.com/in/koltin-kosik-harvey-a0ab5b1ab/'></MemberFactory>
      </div>
    </Layout>
  );
};

export default koltin;
