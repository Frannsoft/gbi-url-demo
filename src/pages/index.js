import React from "react";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export default ({ data }) => {

  const backgroundImage = data.file.childImageSharp.fluid;

  const backgroundImageFluidStack = [
    `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85))`,
    backgroundImage,
  ];

  return (<BackgroundImage Tag="div" fluid={backgroundImageFluidStack}>
    <div style={{ height: `700px` }}>
      <span>Hello World!</span>
    </div>
  </BackgroundImage>);
};

export const query = graphql`
query {
  file(relativePath: { eq: "road(1).jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth:2000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;
