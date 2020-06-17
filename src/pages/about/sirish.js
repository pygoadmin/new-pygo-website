import React from "react";
import Layout from "../../components/Layout";
import MemberFactory from "../../components/MemberFactory";
import { graphql } from "gatsby";

export const query = graphql`
  {
    file(relativePath: { eq: "sirish.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const sirish = ({ data }) => {
  return (
    <Layout>
      <div className='grid-container'>
        <MemberFactory
          image={data.file.childImageSharp.fluid}
          name='Sirish L. Shah, Ph.D., P.Eng.'
          bio={[
            "Sirish L. Shah, Ph.D., P.Eng. has been with the University of Alberta since 1978, where he held the NSERC-Matrikon-Suncor-iCORE Senior Industrial Research Chair in Computer Process Control from 2000 to 2012. He is the recipient of the Albright & Wilson Americas Award of the Canadian Society for Chemical Engineering (CSChE) in 1989, the Killam Professor in 2003, the D.G. Fisher Award of the CSChE for significant contributions in the field of systems and control, the ASTECH award in 2011, the 2015-IEEE Transition to Practice award and the 2017 RS Jane award of the CSChE.",
            <br></br>,
            <br></br>,
            "The main areas of his research are process and performance monitoring, analysis and rationalization of alarm systems.  He is Emeritus Professor at the University of Alberta, a Fellow of the Canadian Academy of Engineering (FCAE), the Chemical Institute of Canada (FCIC) and the IEEE (FIEEE). He currently holds a visiting appointment with the Digital Monozukuri (manufacturing) Education and Research Centre at Hiroshima University in Japan. Professor Shah has co-authored over 200 refereed journal papers and three books. He has consulted widely for the process industry and control software vendors.",
          ]}
          linkText='Research Website'
          outsideLink='http://www.eche.ualberta.ca/~slshah/'></MemberFactory>
      </div>
    </Layout>
  );
};

export default sirish;
