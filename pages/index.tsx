import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Intro } from 'components/intro/Intro';
import { Video } from 'components/video/Video';
import { Highlight } from 'components/intro/Highlight';
import { HighlightSmall } from 'components/intro/HighlightSmall';
import { BlockText } from 'components/block-text/BlockText';
import { PortfolioBlock } from 'components/portfolio-block/PortfolioBlock';
import { Spacer } from 'components/spacer/Spacer';

const IndexPage = (props) => (
  <>
    <Helmet title="IO" />

    <Intro>
      <Highlight>Hello</Highlight> 👋🏽 my name is <Highlight>Antonio</Highlight> and I live in{' '}
      <Highlight>San Francisco</Highlight> 🌉. I'm an engineer who 💖 working on projects that
      combine <Highlight>Design</Highlight>, <Highlight>UX</Highlight> and{' '}
      <Highlight>Web APIs</Highlight>. I'm currently looking for opportunities that can benefit from
      my <Highlight>Experience</Highlight> and <Highlight>Savoire Faire.</Highlight>✨ Here are some
      projects that I've worked on recently. 🧑🏽‍💻
    </Intro>

    <Video
      to="https://vimeo.com/374826636"
      header="Gusto Rebrand"
      link="https://gusto.com/brand"
      description="I was recently hired by <a href='https://www.melonusa.com/' target='_blank'rel='noopener noreferrer' class='umami--click--Melon'>Melon Technology</a> to assist <a href='https://gusto.com' target='_blank'rel='noopener noreferrer' class='umami--click--Gusto'>Gusto</a> with their brand refresh. As the lead front end developer (of a team of 6), I worked closely with the Brand Studio and Growth teams to get over 100 pages updated into the new brand guidelines. The team and I were able to deliver on time with what was noted to be the &quot;smoothest brand launch&quot; anyone has seen at Gusto 🤘. As a means to document the rebranding process, Figma recently posted <a href='https://www.figma.com/blog/gusto/' target='_blank'rel='noopener noreferrer' class='umami--click--Figma'>a detailed outline of the process on their blog</a>. For further information on Gusto's rebranding, feel free to <a href='https://gusto.com/company-news/gusto-brand-refresh' target='_blank'rel='noopener noreferrer' class='umami--click--Gusto-Blog'>read the blog post</a> as well as the <a href='https://gusto.com/brand' target='_blank'rel='noopener noreferrer' class='umami--click--Gusto-Brand-Guidelines'>design guidelines</a>."
    />

    <PortfolioBlock
      data={[
        {
          heading: 'Playstation Vue',
          description:
            'Odopod implemented the iOS companion app (as well as the Chromecast app) for Sony\'s IPTV service. This app included live TV, DVR, and VOD features using integration with MLBAM\'s content delivery service and complex access control features implemented client-side. I was the Technical Director on the project that lasted 2 years. In that time I worked closely with PlayStation on outlining and building not only the applications (iOS and Chromacast), but also the security architecture needed to adhere to their strict security guidelines.',
          image: (
            <Img
              fluid={props.data.imageVue.childImageSharp.fluid}
              alt={'Antonio Almena PlayStation Vue'}
            />
          ),
          to: 'https://www.odopod.com/case-studies/ps-vue',
          eventName: 'umami--click--Vue',
        },
        {
          heading: 'Google Store',
          description:
            'Odopod worked with Google in helping them to create the front-end components, design system and style-guide for Google\'s online store. As the Technical Director on the project I worked closely with Google\'s engineering team in order to adhere to their strict technical requirements and testing guidelines. I worked with the dev team on creating proof of concepts and Mocha scripts as a way to preemptively test our architecture prior to kickoff.',
          image: (
            <Img
              fluid={props.data.imageGoogle.childImageSharp.fluid}
              alt={'Antonio Almena Google Store'}
            />
          ),
          to: 'https://store.google.com',
          eventName: 'umami--click--Google',
        },
        {
          heading: 'Sony Global',
          description:
            'Odopod rebuilt Sony\'s entire global online presence. This large-scale, responsive redesign aligns dozens of fragmented regional sites under a single design system. Our technology powers this unification by providing a robust UI toolkit and HTML style guide for content creators. Part of my tasks as the Technical Director was to digest a 500 page guidelines manual that outlined the technology stack for this massive project that lasted over a year. Afterwards, it was my job to lead the external teams assigned to this project to insure that they kept to Sony\'s technical standards as well as onboard new members to the Sony team.',
          image: (
            <Img
              fluid={props.data.imageSony.childImageSharp.fluid}
              alt={'Antonio Almena Sony Web Transormation'}
            />
          ),
          to: 'https://www.sony.co.uk',
          eventName: 'umami--click--Sony',
        },
        {
          heading: 'Audemars Piguet',
          description:
            'Odopods long standing relationship with Audemars Piguet allowed us to work closely with the luxury watchmaker. When I came on to this project as the Technical Director the dev team was re-constructing the front-end so as to make the site responsive. Along with the front-end, we added an extensive watch browser experience so users can search the entire collection. We also created new API\'s to allow users to schedule appointments with stores while also re-building the site from Symfony to Laravel.',
          image: (
            <Img
              fluid={props.data.imageAudemars.childImageSharp.fluid}
              alt={'Antonio Almena Audemars Piguet'}
            />
          ),
          to: 'https://www.audemarspiguet.com/',
          eventName: 'umami--click--Audemars-Piguet',
        },
        {
          heading: 'Dolby Laboratories',
          description:
            'Odopod designed and engineered Dolby Laboratories online presence. Our technology powers the site\'s responsive redesign by providing a robust UI toolkit and HTML style guide for content creators. As Technical Director on the project that was equal parts design (there were a TON of components), as well as front-end integration into the CMS.',
          image: (
            <Img
              fluid={props.data.imageDolby.childImageSharp.fluid}
              alt={'Antonio Almena Dolby Labs'}
            />
          ),
          to: 'https://www.dolby.com/',
          eventName: 'umami--click--Dolby',
        },
        {
          heading: 'Inside Your Scion',
          description:
            'Although this project stylistically connects with Scion\'s urban customer base, its purpose is significant: to reduce the number of customer service calls regarding vehicle features. My job was to create programmic animations that could be used throughout the application, as well as construct the architecture that enabled the project to scale. For our efforts, the project was the winner of the Communication Arts Interactive Annual Award.',
          image: (
            <Img
              fluid={props.data.imageScion.childImageSharp.fluid}
              alt={'Antonio Almena Inside Your Scion'}
            />
          ),
          to: 'https://www.commarts.com/project/22631/inside-your-scion',
          eventName: 'umami--click--Scion',
        },
      ]}
    />

    <BlockText
      heading="So what's under the hood?"
      description={
        <>
          <p>
            This site is based on{' '}
            <a 
              href="https://ueno.co/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="umami--click--Ueno">
              {' '}
              Ueno's
            </a>{' '}
            starter (which in turn was an extension of the{' '}
            <a
              href="https://github.com/gatsbyjs/gatsby-starter-default"
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--Gatsby"
            >
              Gatsby starter
            </a>
            ) which you can check out here:{' '}
            <a
              href="https://github.com/ueno-llc/create-ueno-app"
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--Ueno-App"
            >
              create-ueno-app
            </a>
            . If you want a starter kit that has no portfolio structure what so ever, I would highly
            recommend using the Ueno starter kit.
          </p>

          <p>
            This site uses: <HighlightSmall>TypeScript</HighlightSmall>,{' '}
            <HighlightSmall>SCSS</HighlightSmall>, <HighlightSmall>CSS Modules</HighlightSmall>,{' '}
            <HighlightSmall>React Hooks</HighlightSmall>,{' '}
            <HighlightSmall>root resolver</HighlightSmall>, <HighlightSmall>GraphQL</HighlightSmall>{' '}
            and <HighlightSmall>code splitting</HighlightSmall>.
          </p>

          <p>&lt;&gt; with 💝in San Francisco. ✌🏼</p>
        </>
      }
    />

    <Spacer spacerStyle={{ height: `${30}px` }} />
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
    }
    imageGoogle: file(relativePath: { eq: "google.jpg" }) {
      ...fluidImage
    }
    imageSony: file(relativePath: { eq: "sony.jpg" }) {
      ...fluidImage
    }
    imageAudemars: file(relativePath: { eq: "audemars.jpg" }) {
      ...fluidImage
    }
    imageDolby: file(relativePath: { eq: "dolby.jpg" }) {
      ...fluidImage
    }
    imageScion: file(relativePath: { eq: "scion.jpg" }) {
      ...fluidImage
    }
  }
`;
