import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from "gatsby-image";

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { HighlightSmall } from 'components/intro/HighlightSmall';
import { BlockText } from 'components/block-text/BlockText';
import { PortfolioBlock } from "components/portfolio-block/PortfolioBlock";
import { Spacer } from "components/spacer/Spacer";

const IndexPage = (props) => (
  <>
    <Helmet title="Home" />

    <Intro>
      <Highlight>Hello</Highlight> 👋🏽 and welcome to my portfolio site. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    </Intro>

    <PortfolioBlock
      data={[
        { heading: "Playstation Vue", 
          description: "Odopod implemented the iOS companion app as well as the Chromecast app for Sony's revolutionary IPTV service. This app includes live TV, DVR, and VOD features using integration with MLBAM's content delivery service and complex access control features implemented client-side.", 
          image: <Img fluid={props.data.imageVue.childImageSharp.fluid} />, 
          to: 'https://www.odopod.com/case-studies/ps-vue' 
        },
        { heading: "Google Store", 
          description: "Odopod worked with Google in helping them to create the front-end components, design system and style-guide for Google's online store. We worked closely with Google's engineering team in order to adhere to their technical requirements and testing guidelines.", 
          image: <Img fluid={props.data.imageGoogle.childImageSharp.fluid} />, 
          to: 'https://store.google.com' 
        },
        { heading: "Sony Global Web Transformation", 
          description: "Odopod rebuilt Sony's entire global online presence. This large-scale, responsive redesign aligns dozens of fragmented regional sites under a single design system. Our technology powers this unification by providing a robust UI toolkit and HTML style guide for content creators.", 
          image: <Img fluid={props.data.imageSony.childImageSharp.fluid} />, 
          to: 'https://www.sony.co.uk' 
        },
        { heading: "Audemars Piguet", 
          description: "Odopods long standing relationship with Audemars Piguet allowed us to work closely with the luxury watchmaker. We refreshed the online watch browser making it easier (and faster) to find watches from their extensive catalog. We also made it easier for customers to get in touch with stores and make appointments online thus increasing their ROI.", 
          image: <Img fluid={props.data.imageAudemars.childImageSharp.fluid} />, 
          to: 'https://www.audemarspiguet.com/' 
        },
        { heading: "Dolby Laboratories", 
          description: "Odopod designed and engineered Dolby Laboratories online presence. Our technology powers the site's responsive redesign by providing a robust UI toolkit and HTML style guide for content creators.", 
          image: <Img fluid={props.data.imageDolby.childImageSharp.fluid} />, 
          to: 'https://www.dolby.com/' 
        },
        { heading: "Inside Your Scion", 
          description: "Although this CD-ROM stylistically connects with Scion's urban customer base, its purpose is significant: to reduce the number of customer service calls regarding vehicle features. Included with every Scion at the point of purchase, it is both scalable and modular, allowing content to be easily updated via an external XML file structure. Winner of the Communication Arts Interactive Annual Award.", 
          image: <Img fluid={props.data.imageScion.childImageSharp.fluid} />, 
          to: 'https://www.commarts.com/project/22631/inside-your-scion' 
        },
      ]}
    />

    <BlockText
      heading="So what's under the hood?"
      description={(
        <>
          <HighlightSmall>TypeScript</HighlightSmall><HighlightSmall>SCSS</HighlightSmall>, <HighlightSmall>CSS Modules</HighlightSmall>, <HighlightSmall>React Hooks</HighlightSmall>, &nbsp;
          <HighlightSmall>root resolver</HighlightSmall>, <HighlightSmall>code splitting</HighlightSmall> and a lot of love. <br />
          &lt;&gt; with &hearts; in San Francisco. ✌🏼
        </>
      )}
    />

    <Spacer />
  </>
);

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(quality: 60) {
      ...GatsbyImageSharpFluid
      
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    imageVue: file(relativePath: { eq: "vue.jpg" }) {
      ...fluidImage
    },
    imageGoogle: file(relativePath: { eq: "google.jpg" }) {
      ...fluidImage
    },
    imageSony: file(relativePath: { eq: "sony.jpg" }) {
      ...fluidImage
    },
    imageAudemars: file(relativePath: { eq: "audemars.jpg" }) {
      ...fluidImage
    },
    imageDolby: file(relativePath: { eq: "dolby.jpg" }) {
      ...fluidImage
    },
    imageScion: file(relativePath: { eq: "scion.jpg" }) {
      ...fluidImage
    }
  }
`;