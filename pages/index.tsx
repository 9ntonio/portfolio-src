import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { HighlightSmall } from 'components/intro/HighlightSmall';
import { BlockText } from 'components/block-text/BlockText';
import { PortfolioBlock } from 'components/portfolio-block/PortfolioBlock';
import { Spacer } from 'components/spacer/Spacer';

const IndexPage = (props) => (
  <>
    <Helmet title="Home" />

    <Intro>
      <Highlight>Hello</Highlight> 👋🏽 and welcome. My name is <Highlight>Antonio</Highlight> and I 💖 the <Highlight>Web</Highlight>.
      I 💓 it so much, that I've based my livelihood on it since it has been a <Highlight>passion</Highlight> of mine since day one.
      I 💘 how it can <Highlight>connect</Highlight>, <Highlight>teach</Highlight> and <Highlight>entertain</Highlight> us from anywhere in the 🌎.
      I also ❤️ working with teams that are <Highlight>passionate</Highlight> about <Highlight>people</Highlight>👫 and work together to find the best way to <Highlight>communicate</Highlight> their <Highlight>products</Highlight> and <Highlight>ideas</Highlight> to the 🌍.
      I'm <Highlight>currently looking</Highlight> to find such a team to <Highlight>join</Highlight>.
      I hope that the <Highlight>projects</Highlight> and <Highlight>experience</Highlight> presented here show <Highlight>you</Highlight> that I'm a great person for <Highlight>your team</Highlight>.
      Sincerely, <Highlight>Antonio</Highlight> 👨🏽‍💻.
    </Intro>

    <PortfolioBlock
      data={[
        { heading: 'Playstation Vue',
          description: 'Odopod implemented the iOS companion app as well as the Chromecast app for Sony\'s revolutionary IPTV service. This app includes live TV, DVR, and VOD features using integration with MLBAM\'s content delivery service and complex access control features implemented client-side. I was the Technical Director on the project that lasted 2 years. In that time I worked closely with PlayStation on outlining and building not only the applications (iOS and Chromacast), but also the security architecture needed to adhere to their strict security guidelines.',
          image: <Img fluid={props.data.imageVue.childImageSharp.fluid} alt={'Antonio Almena PlayStation Vue'} />,
          to: 'https://www.odopod.com/case-studies/ps-vue',
        },
        { heading: 'Google Store',
          description: 'Odopod worked with Google in helping them to create the front-end components, design system and style-guide for Google\'s online store. As the Technical Director on the project I worked closely with Google\'s engineering team in order to adhere to their strict technical requirements and testing guidelines. I worked with the dev team on creating proof of concepts and Mocha scripts as a way to preemptively test our architecture prior to kickoff as a means to test and solidify our architecture.',
          image: <Img fluid={props.data.imageGoogle.childImageSharp.fluid} alt={'Antonio Almena Google Store'} />,
          to: 'https://store.google.com',
        },
        { heading: 'Sony Global Web Transformation',
          description: 'Odopod rebuilt Sony\'s entire global online presence. This large-scale, responsive redesign aligns dozens of fragmented regional sites under a single design system. Our technology powers this unification by providing a robust UI toolkit and HTML style guide for content creators. Part of my tasks as the Technical Director was to digest a 500 page guidelines manual that outlined the technology stack for this massive project that lasted over a year. Afterwards, it was my job to lead the external team assigned to this project to insure that they kept to Sony\'s technical standards as well as onboard new members to the Sony team.',
          image: <Img fluid={props.data.imageSony.childImageSharp.fluid} alt={'Antonio Almena Sony Web Transormation'} />,
          to: 'https://www.sony.co.uk',
        },
        { heading: 'Audemars Piguet',
          description: 'Odopods long standing relationship with Audemars Piguet allowed us to work closely with the luxury watchmaker. When I came on to this project as the Technical Director the dev team was re-constructing the front-end so as to make the site responsive. Along with the front-end reconstruction, we added an extensive watch browser experience so users can search the entire collection at faster speeds. We also created new API\'s to allow users to schedule appointments with stores via the site while also re-platforming the site from Symfony to Laravel.',
          image: <Img fluid={props.data.imageAudemars.childImageSharp.fluid} alt={'Antonio Almena Audemars Piguet'} />,
          to: 'https://www.audemarspiguet.com/',
        },
        { heading: 'Dolby Laboratories',
          description: 'Odopod designed and engineered Dolby Laboratories online presence. Our technology powers the site\'s responsive redesign by providing a robust UI toolkit and HTML style guide for content creators. As Technical Director on the project that was equal parts design (there were many style components to the system), as well as front-end integration into the large CMS that was powering the site.',
          image: <Img fluid={props.data.imageDolby.childImageSharp.fluid} alt={'Antonio Almena Dolby Labs'} />,
          to: 'https://www.dolby.com/',
        },
        { heading: 'Inside Your Scion',
          description: 'Although this project stylistically connects with Scion\'s urban customer base, its purpose is significant: to reduce the number of customer service calls regarding vehicle features. My job was to create programmic animations that could be used throughout the application as well as construct the architecture that enabled the project to scale via XML file updates. For our efforts, the project was the winner of the Communication Arts Interactive Annual Award.',
          image: <Img fluid={props.data.imageScion.childImageSharp.fluid} alt={'Antonio Almena Inside Your Scion'} />,
          to: 'https://www.commarts.com/project/22631/inside-your-scion',
        },
      ]}
    />

    <BlockText
      heading="So what's under the hood?"
      description={(
        <>
          This site is based on <a href="https://ueno.co/" target="_blank" rel="noopener noreferrer"> Ueno's</a> starter (which in turn was an extension of the <a href="https://github.com/gatsbyjs/gatsby-starter-default" target="_blank" rel="noopener noreferrer" >Gatsby starter</a>) which you can check out here: <a href="https://github.com/ueno-llc/create-ueno-app" target="_blank" rel="noopener noreferrer">create-ueno-app</a>.
          If you want a starter kit that has no portfolio structure what so ever, I would highly recommend using the Ueno starter kit.
          <br/><br/>
          This site uses: <HighlightSmall>TypeScript</HighlightSmall>, <HighlightSmall>SCSS</HighlightSmall>, <HighlightSmall>CSS Modules</HighlightSmall>, <HighlightSmall>React Hooks</HighlightSmall>, <HighlightSmall>root resolver</HighlightSmall>, <HighlightSmall>GraphQL</HighlightSmall> and <HighlightSmall>code splitting</HighlightSmall>.
          <br/><br/>
          &lt;&gt; with 💝in San Francisco. ✌🏼
        </>
      )}
    />

    <Spacer />
  </>
);

export default IndexPage;

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
