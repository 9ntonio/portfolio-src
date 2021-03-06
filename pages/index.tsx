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

const IndexPage = (props: any) => (
  <>
    <Helmet title="Collected Works" />

    <Intro>
      <Highlight>Hola</Highlight> 👋🏽 my name is <Highlight>Antonio</Highlight> and I live in{' '}
      <Highlight>San</Highlight> <Highlight>Francisco</Highlight> 🌉. I'm a{' '}
      <Highlight>Design</Highlight> <Highlight>Technologist</Highlight> who ❤️‍🔥 working on
      projects that combine <Highlight>Design</Highlight>, <Highlight>UX</Highlight>,{' '}
      <Highlight>Animation</Highlight> and <Highlight>Web</Highlight> <Highlight>APIs</Highlight>.
      I'm currently looking for opportunities that can benefit from my{' '}
      <Highlight>Experience</Highlight> and <Highlight>Savoire</Highlight>{' '}
      <Highlight>Faire</Highlight> 🌟. Below are a few recent projects. 🧑🏽‍💻
    </Intro>

    <Video
      to="https://vimeo.com/374826636"
      header="Gusto Rebrand"
      link="https://gusto.com/brand"
      eventName="umami--click--gusto"
      description="I was hired by <a href='https://www.melonusa.com/' target='_blank' rel='noopener noreferrer' class='umami--click--melon'>Melon Technology</a> to assist <a href='https://gusto.com' target='_blank' rel='noopener noreferrer' class='umami--click--gusto'>Gusto</a> with their brand refresh. As the lead developer (of a team of 6), I worked closely with the Brand Studio, Marketing and Growth teams to get over 100 pages updated into the new brand guidelines. The team and I were able to deliver on time with what was noted to be the &quot;<u>smoothest brand launch</u>&quot; anyone has seen at Gusto 🎉. As a means to document the rebranding process, Figma recently posted <a href='https://www.figma.com/blog/gusto/' target='_blank' rel='noopener noreferrer' class='umami--click--figma'>a detailed outline of the process on their blog</a>. For further information on Gusto's rebranding, feel free to <a href='https://gusto.com/company-news/gusto-brand-refresh' target='_blank' rel='noopener noreferrer' class='umami--click--gusto-blog'>read the blog post</a> as well as the <a href='https://gusto.com/brand' target='_blank' rel='noopener noreferrer' class='umami--click--gusto-brand-guidelines'>design guidelines</a>."
    />

    <PortfolioBlock
      data={[
        {
          heading: 'Sunbasket',
          description:
            'Fun fact about me… I’m also an amazing photographer 📸. My wife is also (coincidently) the Lead Food Stylist for Sunbasket. So when Covid forced most of us to stay indoors, we decided to set up a studio at home. The goal was to create a safe and productive working environment and begin creating imagery for recipes and marketing campaigns for Sunbasket. The relationship evolved and created oppurtunities to work with the Sunbasket product team on front-end projects.',
          image: (
            <Img
              fluid={props.data.imageSunbasket.childImageSharp.fluid}
              alt={'Antonio Almena Sunbasket'}
            />
          ),
          to: 'https://www.sunbasket.com/',
          eventName: 'umami--click--sunbasket',
          bullets: null,
        },
        {
          heading: 'Google Store',
          description:
            "Odopod worked with Google in helping them to create the front-end components, design system and style-guide for Google's online store. As the Technical Director on the project I worked closely with Google's engineering team in order to adhere to their strict technical requirements and testing guidelines. I worked with the dev team on creating proof of concepts that were tied to a suite of Mocha tests as a way to preemptively test our architecture prior to kickoff.",
          image: (
            <Img
              fluid={props.data.imageGoogle.childImageSharp.fluid}
              alt={'Antonio Almena Google Store'}
            />
          ),
          to: 'https://store.google.com',
          eventName: 'umami--click--google',
          bullets: null,
        },
        {
          heading: 'Playstation Vue',
          description:
            "Odopod implemented the iOS companion app (as well as the Chromecast app) for Sony's IPTV service. This app included live TV, DVR, and VOD features using integration with MLBAM's content delivery service and complex access control features implemented client-side. I was the Technical Director on the project that lasted 2 years. In that time I worked closely with PlayStation on outlining and building not only the applications (iOS and Chromacast), but also the security architecture needed to adhere to their strict guidelines.",
          image: (
            <Img
              fluid={props.data.imageVue.childImageSharp.fluid}
              alt={'Antonio Almena PlayStation Vue'}
            />
          ),
          to: 'https://www.odopod.com/case-studies/ps-vue',
          eventName: 'umami--click--vue',
          bullets: null,
        },
        {
          heading: 'Sony Global',
          description:
            "Odopod rebuilt Sony's entire global online presence. This large-scale, responsive redesign aligns dozens of fragmented regional sites under a single design system. Our technology powers this unification by providing a robust UI toolkit and HTML style guide for content creators. Part of my tasks as the Technical Director was to digest a 500 page guidelines manual that outlined the technology stack for this massive project that lasted over a year. Afterwards, it was my job to lead the external teams assigned to this project to insure that they kept to Sony's technical standards as well as onboard new members to the Sony team.",
          image: (
            <Img
              fluid={props.data.imageSony.childImageSharp.fluid}
              alt={'Antonio Almena Sony Web Transormation'}
            />
          ),
          to: 'https://www.sony.co.uk',
          eventName: 'umami--click--sony',
          bullets: null,
        },
        {
          heading: 'Audemars Piguet',
          description:
            "Odopods long standing relationship with Audemars Piguet allowed us to work closely with the luxury watchmaker. When I came on to this project as the Technical Director the dev team was re-constructing the front-end so as to make the site responsive. Along with the front-end, we added an extensive watch browser experience so users can search the entire collection. We also created new API's to allow users to schedule appointments with stores while also re-building the site from Symfony to Laravel.",
          image: (
            <Img
              fluid={props.data.imageAudemars.childImageSharp.fluid}
              alt={'Antonio Almena Audemars Piguet'}
            />
          ),
          to: 'https://www.audemarspiguet.com/',
          eventName: 'umami--click--audemars-piguet',
          bullets: null,
        },
        {
          heading: 'Inside Your Scion',
          description:
            "Although this project stylistically connects with Scion's urban customer base, its purpose is significant: to reduce the number of customer service calls regarding vehicle features. My job was to create programmic animations that could be used throughout the application. I also created the architecture whose main goal was to quickly scale via various deliverables. For our efforts, the project was the winner of the Communication Arts Interactive Annual Award. 🎉",
          image: (
            <Img
              fluid={props.data.imageScion.childImageSharp.fluid}
              alt={'Antonio Almena Inside Your Scion'}
            />
          ),
          to: 'https://www.commarts.com/project/22631/inside-your-scion',
          eventName: 'umami--click--scion',
          bullets: null,
        },
      ]}
    />

    <BlockText
      heading="What technologies have I been working with?"
      description={
        <div>
          <p>
            I've had the oppurtunity to work with the following:
            <br />
            <HighlightSmall>Ruby on &nbsp;Rails</HighlightSmall>,{' '}
            <HighlightSmall>React</HighlightSmall>, <HighlightSmall>NextJS</HighlightSmall>,{' '}
            <HighlightSmall>Gatsby</HighlightSmall>, <HighlightSmall>TypeScript</HighlightSmall>,{' '}
            <HighlightSmall>Prisma</HighlightSmall>, <HighlightSmall>PostgrSQL</HighlightSmall>,{' '}
            <HighlightSmall>GraphQL</HighlightSmall> ,<HighlightSmall>HAML</HighlightSmall>,{' '}
            <HighlightSmall>SCSS</HighlightSmall>, <HighlightSmall>Bootstrap</HighlightSmall>,{' '}
            <HighlightSmall>Figma</HighlightSmall> and a lot of{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API"
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--web-api"
            >
              Web API's
            </a>
            .
          </p>

          <p>
            &lt;<code>made</code>&gt; with 💖 in San Francisco 🌁
          </p>
        </div>
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
    imageSunbasket: file(relativePath: { eq: "sunbasket.jpg" }) {
      ...fluidImage
    }
    imageScion: file(relativePath: { eq: "scion.jpg" }) {
      ...fluidImage
    }
  }
`;
