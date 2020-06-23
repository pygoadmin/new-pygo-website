import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundSlider from "gatsby-image-background-slider";

const MainBackgroundSlider = () => {
  return (
    <div>
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "backgrounds" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 800, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
        `)}
      />
    </div>
  );
};

export default MainBackgroundSlider;
