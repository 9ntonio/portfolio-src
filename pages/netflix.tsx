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
import Linkedin from 'assets/svg/linkedin_xl.svg';
import Github from 'assets/svg/github_xl.svg';
import s from '../components/footer/Square.scss';

const TemplatePage = (props: any) => (
  <>
    <Helmet title="Netfilx" />

    <Intro>
      Hello 👋🏽 Netflix. My name is <Highlight>Antonio</Highlight> and I would 💖 to join your{' '}
      <Highlight>Design</Highlight> <Highlight>Technologist</Highlight> team! The projects listed
      below will help demonstrate:
      
      <ul className={s.square__margin_bottom}>
        <li key="0">
          &bull; My <Highlight>creative</Highlight>/<Highlight>design</Highlight>{' '}
          <Highlight>technology</Highlight> experience.
        </li>
        <li key="1">
          &bull; My <Highlight>design</Highlight> <Highlight>skills</Highlight> and why I 💘{' '}
          <Highlight>partnering</Highlight> with <Highlight>creative</Highlight>{' '}
          <Highlight>teams</Highlight>.
        </li>
        <li>
          &bull; My <Highlight>marketing</Highlight> experience on{' '}
          <Highlight>"go-to-market"</Highlight> projects.
        </li>
        <li key="2">
          &bull; How my <Highlight>opinions</Highlight> foster <Highlight>solutions</Highlight> the
          whole <Highlight>team</Highlight> can <Highlight>love</Highlight> 🙌
        </li>
      </ul>

      <ul className={s.square__list}>
        <li key="0" className={s.square__svg_icon +' '+ s.square__margin_right}>
          <a
            href="https://www.linkedin.com/in/antonio-almena/"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--netflix-linkedin"
          >
            <Linkedin />
          </a>
        </li>

        <li key="1" className={s.square__svg_icon}>
          <a
            href="https://github.com/9ntonio"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--netflix-github"
          >
            <Github />
          </a>
        </li>
      </ul>
    </Intro>

    <PortfolioBlock
      data={[
        {
          heading: 'Gusto Rebrand',
          description:
            'I was recently hired by <a href=\'https://www.melonusa.com/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-melon\'>Melon Technology</a> to assist <a href=\'https://gusto.com\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-gusto\'>Gusto</a> with their brand refresh. As the lead engineer (of a team of 6), I worked closely with the Marketing, Design, UX, Growth & Product teams to get over 100 pages updated into the new brand guidelines. The team and I were able to deliver on time with what was noted to be the &quot;smoothest brand launch&quot; anyone has seen at Gusto. As a means to document the process, Figma posted <a href=\'https://www.figma.com/blog/gusto/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-figma\'>a detailed outline of our process on their blog</a>. For further information on Gusto\'s rebranding, feel free to <a href=\'https://gusto.com/company-news/gusto-brand-refresh\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-gusto-blog\'>read the blog post</a> as well as the <a href=\'https://gusto.com/brand\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-gusto-brand-guidelines\'>design guidelines</a>.',
          image: (
            <Img fluid={props.data.imageGusto.childImageSharp.fluid} alt={'Antonio Almena Gusto'} />
          ),
          to: 'https://gusto.com',
          eventName: 'umami--click--netflix-gusto',
          bullets: [
            { copy: 'Technologies | Ruby on Rails, React, JavaScript, TypeScript, SCSS, HAML, Marketo, Optimizely, Wistia & Lottie' },
            { copy: 'Design Tools | Figma, After Effects & Illustrator' },
            { copy: 'Teams | Marketing, Design, UX, Growth & Product' },
            { copy: '<a href=\'https://cdn.sanity.io/images/599r6htc/production/c5c03f8b43a8c79000f9369c3b286e7c8f60ac65-1600x801.png\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-gusto-figma-library\'>Link | Figma component library example</a>' },
          ],
        },
        {
          heading: 'Gusto Wallet',
          description:
            'Gusto Wallet is a financial product created for employees of Gusto customers (their employers). The visual direction was the driver for differentiating the product as an employee tool. The design team and I worked together (via Figma) on iterating through idea\'s on how to best implement their After Effects animations onto the page. I created a proof of concept to validate my ideas on using <a href=\'https://airbnb.design/lottie/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-lottie\'>Lottie</a> animations (via <a href=\'https://exchange.adobe.com/creativecloud.details.12557.bodymovin.html\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-bodymovin\'>Bodymovin</a>) with <a href=\'https://code.odopod.com/odo-scroll-animation\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-odoscrollanimation\'>OdoScrollAnimation</a> which is a scroll event listening componet from <a href=\'https://www.odopod.com/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-odopod\'>Odopod</a>. Once I gained the confidence of the design team with my POC, the team and I began making some <a href=\'https://gusto.com/wallet\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-internet-magic\'>internet magic</a> ✨.',
          image: (
            <Img
              fluid={props.data.imageWallet.childImageSharp.fluid}
              alt={'Antonio Almena Gusto Wallet'}
            />
          ),
          to: 'https://gusto.com/wallet',
          eventName: 'umami--click--netflix-gusto-wallet',
          bullets: [
            { copy: 'Technologies | Ruby on Rails, HAML, JavaScript, TypeScript, SCSS, Lottie & OdoScrollAnimation' },
            { copy: 'Design | Figma, After Effects & Illustrator' },
            { copy: 'Teams | Marketing, Design, UX, Growth & Product' },
            { copy: '<a href=\'https://github.com/9ntonio/wallet\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-github-wallet\'>Github | Site file examples</a>' },
          ],
        },
        {
          heading: 'Google Store',
          description:
            'While working at <a href=\'https://www.odopod.com/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-odopod\'>Odopod</a> I was honored ( and excited ) to work on this project with Google\'s UX, Marketing, Product and Engineering teams. One of the biggest challenges was adhering to Google’s strict technical requirements. One of the biggest challenges was not having access to their servers. This meant that all deliverables needed to be as clean and bug free as possible. After some initial R&D, we decided to create a proof of concept where we we added <a href=\'https://mochajs.org/\' target=\'_blank\' rel=\'noopener noreferrer\' class=\'umami--click--netflix-mocha\'>Mocha</a> tests into our CI process. This allowed us to preemptively test our architecture and address issues prior to kickoff. The initial research enabled us to create a test suite that easily scaled with our fast growing component library.',
          image: (
            <Img
              fluid={props.data.imageGoogle.childImageSharp.fluid}
              alt={'Antonio Almena Google Store'}
            />
          ),
          to: 'https://store.google.com',
          eventName: 'umami--click--netflix-google',
          bullets: [
            { copy: 'Design | InVision, Photoshop & Illustrator' },
            { copy: 'Technologies | Angular, JavaScript, Webpack, Mocha & SCSS' },
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
            <HighlightSmall>Mustache</HighlightSmall>, <HighlightSmall>Figma</HighlightSmall> and a lot of{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API"
              target="_blank"
              rel="noopener noreferrer"
              className="umami--click--netflix-web-api"
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

export default TemplatePage;

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
