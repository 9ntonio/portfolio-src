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

const IndexPage = (props: any) => (
  <>
    <Helmet title="Square" />

    <Intro>
      Hello 👋🏽 Square. My name is <Highlight>Antonio</Highlight> and I would 💖 to join your{' '}
      <Highlight>Design Technologist</Highlight> team! The projects listed below will help
      demonstrate:
      <ul>
        <li>
          &bull; My <Highlight>creative/design</Highlight> <Highlight>technology</Highlight>{' '}
          experience.
        </li>
        <li>
          &bull; My <Highlight>design skills</Highlight> and why I 💘{' '}
          <Highlight>partnering</Highlight> with <Highlight>creative teams</Highlight>.
        </li>
        <li>
          &bull; My <Highlight>marketing</Highlight> experience on{' '}
          <Highlight>"go-to-market"</Highlight> projects.
        </li>
        <li>
          &bull; How my <Highlight>opinions</Highlight> foster <Highlight>solutions</Highlight> the
          whole <Highlight>team</Highlight> can <Highlight>love</Highlight> 🙌
        </li>
      </ul>
    </Intro>

    <PortfolioBlock
      data={[
        {
          heading: 'Gusto Rebrand',
          description:
            'I was recently hired by <a href=\'https://www.melonusa.com/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-melon\'>Melon Technology</a> to assist <a href=\'https://gusto.com\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-gusto\'>Gusto</a> with their brand refresh. As the lead developer (of a team of 6), I worked closely with the Brand Studio, Marketing and Growth teams to get over 100 pages updated into the new brand guidelines. The team and I were able to deliver on time with what was noted to be the &quot;smoothest brand launch&quot; anyone has seen at Gusto. As a means to document the process, Figma recently posted <a href=\'https://www.figma.com/blog/gusto/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-figma\'>a detailed outline of our process on their blog</a>. For further information on Gusto\'s rebranding, feel free to <a href=\'https://gusto.com/company-news/gusto-brand-refresh\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-gusto-blog\'>read the blog post</a> as well as the <a href=\'https://gusto.com/brand\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-gusto-brand-guidelines\'>design guidelines</a>.',
          image: (
            <Img fluid={props.data.imageGusto.childImageSharp.fluid} alt={'Antonio Almena Gusto'} />
          ),
          to: 'https://gusto.com',
          eventName: 'umami--click--square-gusto',
          bullets: [
            {
              copy: 'Technologies | Ruby on Rails, React, TypeScript, SCSS, HAML, Marketo & Lottie',
            },
            { copy: 'Design Tools | Figma, After Effects & Illustrator' },
            { copy: 'Teams | Marketing, Design, UX, Growth & Product' },
          ],
        },
        {
          heading: 'Gusto Wallet',
          description:
            'Gusto Wallet is a financial product created for employees of Gusto customers (their employers). The visual direction was the driver for differentiating the product as an employee tool. The design team and I worked together (via Figma) on iterating through idea\'s on how to best implement their After Effects animations. I created a proof of concept to validate my ideas on using <a href=\'https://airbnb.design/lottie/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-lottie\'>Lottie</a> animations (via <a href=\'https://exchange.adobe.com/creativecloud.details.12557.bodymovin.html\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-bodymovin\'>Bodymovin</a>) with <a href=\'https://github.com/scottcorgan/tiny-emitter\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-tiny-emitter\'>Tiny-Emitter.</a> Once I gained the confidence of the design team with my POC, the team and I began making some internet magic ✨.',
          image: (
            <Img
              fluid={props.data.imageWallet.childImageSharp.fluid}
              alt={'Antonio Almena Gusto Wallet'}
            />
          ),
          to: 'https://gusto.com/wallet',
          eventName: 'umami--click--square-gusto-wallet',
          bullets: [
            {
              copy:
                'Technologies | Ruby on Rails, React, TypeScript, SCSS, HAML, Lottie & Tiny-Emitter',
            },
            { copy: 'Design | Figma, After Effects & Illustrator' },
            { copy: 'Teams | Marketing, Design, UX, Growth & Product' },
          ],
        },
        {
          heading: 'Google Store',
          description:
            'While working at <a href=\'https://www.odopod.com/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-odopod\'>Odopod</a> I was honored ( and excited ) to work on this project with Google\'s UX, Marketing, Product and Engineering teams. One of the biggest challenges was adhering to Google’s strict technical requirements. One of the biggest challenges was not having access to their servers. This meant that all deliverables needed to be as clean and bug free as possible. After some initial R&D, we decided to create a proof of concept where we we added <a href=\'https://mochajs.org/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--square-mocha\'>Mocha</a> tests into our CI process. This allowed us to preemptively test our architecture and address issues prior to kickoff. The initial research enabled us to create a test suite that easily scaled.',
          image: (
            <Img
              fluid={props.data.imageGoogle.childImageSharp.fluid}
              alt={'Antonio Almena Google Store'}
            />
          ),
          to: 'https://store.google.com',
          eventName: 'umami--click--square-google',
          bullets: [
            { copy: 'Design | InVision, Photoshop & Illustrator' },
            { copy: 'Technologies | Angular, Javascript, Webpack, Mocha & SCSS' },
            { copy: 'Teams | Marketing, Design, UX, Engineering & Product' },
          ],
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
    imageGusto: file(relativePath: { eq: "gusto.jpg" }) {
      ...fluidImage
    }
    imageWallet: file(relativePath: { eq: "wallet.jpg" }) {
      ...fluidImage
    }
    imageGoogle: file(relativePath: { eq: "google.jpg" }) {
      ...fluidImage
    }
  }
`;
