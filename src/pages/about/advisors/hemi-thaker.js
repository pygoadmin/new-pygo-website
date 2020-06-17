import React from "react";
import Layout from "../../../components/Layout";
import MemberFactory from "../../../components/MemberFactory";
import { graphql } from "gatsby";

export const query = graphql`
  {
    file(relativePath: { eq: "hemi.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const hemi = ({ data }) => {
  return (
    <Layout>
      <div className='grid-container'>
        <MemberFactory
          image={data.file.childImageSharp.fluid}
          name='Hemi Thaker'
          bio={[
            "Hemi Thaker is a successful entrepreneur, technologist and leader. He has co-founded four companies, including Anue Systems, which was sold to Ixia Communications in 2012 and Sybarus Technologies, which was sold to Lucent Technologies in 1999. Hemi is also a co-founder of Waterloo Springs, a non-profit dedicated to creating self-sustaining ecosystems to continually better the lives of those in need using frugal engineering and design thinking. Hemi holds a bachelor’s degree in computer engineering in 1986 from the University of Alberta and a master’s degree in electrical engineering in 1988 from the University of Waterloo.",
            <br></br>,
            <br></br>,
            "Inc 500 CEO, E&Y Entrepreneur of the Year, Central Texas 2011, D&T Fast 50/Fast 500 CEO. Founder & CEO, Anue Systems, Inc.,",
            <br></br>,
            <br></br>,
            "Founder & VP Engineering, Sybarus Technologies, Founder, Vtools, Inc.",
            <br></br>,
            <br></br>,
            "17 patents granted",
          ]}
          linkText='LinkedIn'
          outsideLink='https://www.linkedin.com/in/hemi-thaker-b4891/'></MemberFactory>
      </div>
    </Layout>
  );
};

export default hemi;
