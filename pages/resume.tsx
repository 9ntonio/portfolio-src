import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockTextResume } from 'components/block-text/BlockTextResume';
import { Highlight } from 'components/intro/Highlight';
import { Spacer } from 'components/spacer/Spacer';
import s from '../components/intro/Intro-Mobile.scss';

export default () => (
  <>
    <Helmet title="Résumé" />

    <Intro
      subtext="Jared Stanley"
      to="https://www.linkedin.com/in/jaredstanley/"
      eventName="umami--click--resume-jared"
    >
      "During <Highlight>extremely</Highlight> <Highlight>high-stress</Highlight> 💦 situations
      requiring <Highlight>complex</Highlight> <Highlight>design</Highlight> and{' '}
      <Highlight>code</Highlight> <Highlight>deliverables</Highlight> 📩, I never once saw{' '}
      <Highlight>Antonio</Highlight> lose his cool 😎 or drop the ball 🎾 on{' '}
      <Highlight>anything</Highlight>.
      <div className={s.intro_mobile__mobile_hide}>
        {' '}
        He was a great <Highlight>communicator</Highlight>, had a very{' '}
        <Highlight>thorough</Highlight> <Highlight>understanding</Highlight> of the technology
        requirements as well as a very <Highlight>nuanced</Highlight>{' '}
        <Highlight>understanding</Highlight> of the design system being implemented (a{' '}
        <Highlight>500</Highlight>-<Highlight>page</Highlight>📄 doc!). I thoroughly enjoyed working
        with <Highlight>Antonio</Highlight> and would look forward to working with him again if the
        opportunity arose. I <Highlight>highly</Highlight> <Highlight>recommend</Highlight> him to
        any team that is looking for a solid client-facing <Highlight>Technology</Highlight>{' '}
        <Highlight>Director</Highlight>👨🏽‍💻 who is adept at shepherding complex projects out the
        door🚪 while maintaining <Highlight>design</Highlight> <Highlight>integrity</Highlight> and
        a <Highlight>thorough</Highlight> <Highlight>understanding</Highlight> of the projects'{' '}
        <Highlight>technology</Highlight> <Highlight>stack</Highlight>.
      </div>
      "&nbsp;👍🏽
    </Intro>

    <BlockTextResume
      heading="Engineer/Creative Technologist"
      subheading="Self Employed | Oct 2018 - Present"
      description={
        <>
          <p>
            I'm an experienced UX design and engineering lead who enjoys working on mobile and web
            applications.
          </p>

          <p>
            I've been able to work on consumer products with great teams in marketing as well as
            growth.
          </p>

          <p>I enjoy contemplating the details of an applications aesthetic and technical sides.</p>

          <u>Here are a few headlines:</u>
          <br />
          <ul>
            <li>I've built design and development departments that scaled.</li>
            <li>I've developed and released various consumer products.</li>
            <li>I'm able to manage multiple projects with various moving parts.</li>
            <li>Amateur Cheerleader 🔊 🛹</li>
            <li>
              Awarded the{' '}
              <a
                href="https://www.commarts.com/project/22631/inside-your-scion"
                target="_blank"
                rel="noopener noreferrer"
                className="umami--click--resume-heading-scion"
              >
                Communication Arts Interactive Annual Award
              </a>
              .
            </li>
          </ul>
        </>
      }
    />

    <BlockTextResume
      heading="Associate Technical Director"
      subheading="Odopod | Mar 2013 - Oct 2018"
      description={
        <>
          • Led an external team of engineers in building the responsive frontend for{' '}
          <a
            href="https://www.sony.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--resume-sony"
          >
            sony.co.uk
          </a>
          .<br />• Led engineering team and architected with Sony the iOS and Chromecast
          applications for{' '}
          <a
            href="https://www.odopod.com/case-studies/ps-vue"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--resume-vue"
          >
            PlayStation Vue
          </a>
          .<br />• Led engineering team and worked closely with Google to help create the{' '}
          <a
            href="https://store.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--resume-google"
          >
            Google online store.
          </a>
          <br />
          • Conducted code reviews for team members to look for optimizations, maintain project
          standards, and share knowledge.
          <br />
          • Adept at creating and managing scope, budget and timelines for various projects.
          <br />
          • Collaborated with engineers, designers, product managers and support teams to implement
          our strategies across various products.
          <br />• Hands on development.
        </>
      }
    />

    <BlockTextResume
      heading="Technical Director"
      subheading="Petrol | Mar 2007 - May 2012"
      description={
        <>
          • Built and led an engineering department consisting of 20+ employees ranging from
          engineers, producers, art directors and QA.
          <br />
          • Adept at creating and leading online marketing campaigns that meet scope, budget and
          timeline requirements.
          <br />
          • Created and presented creative and technical solutions for various client projects.
          <br />
          • Hired, mentored and set professional goals for engineering team.
          <br />• Hands on development.
        </>
      }
    />

    <BlockTextResume
      heading="Senior Engineer"
      subheading="Heavenspot | Feb 2006 – Apr 2007"
      description={
        <>
          • Architected systems and processes to standardize and streamline the development of
          projects.
          <br />
          • Conducted code reviews for team members to look for optimizations, maintain project
          standards, and share knowledge.
          <br />
          • Spearheaded internal movement to create our own code library.
          <br />• Hands on development.
        </>
      }
    />

    <BlockTextResume
      heading="Senior Engineer"
      subheading="Genex | May 2003 – Feb 2006"
      description={
        <>
          • Worked with a team of engineers focused on building the marketing site for{' '}
          <a
            href="https://www.acura.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--resume-acura"
          >
            Acura.com
          </a>
          .<br />
          • Spearheaded internal movement to create our own code library.
          <br />• Awarded the{' '}
          <a
            href="https://www.commarts.com/project/22631/inside-your-scion"
            target="_blank"
            rel="noopener noreferrer"
            className="umami--click--resume-scion"
          >
            Communication Arts Interactive Annual Award
          </a>
          .<br />• Hands on development.
        </>
      }
    />

    <BlockTextResume
      heading="Education"
      subheading="Otis College of Art and Design | Bachelor of Fine Art"
      description={
        <>
          Worked primarily in new media technologies (digital imaging, web technologies, computer
          processing) within the umbrella of the fine art curriculum as a means to find new forms of
          communication for my work.
        </>
      }
    />

    <Spacer spacerStyle={{ height: `${100}px` }} />
  </>
);
