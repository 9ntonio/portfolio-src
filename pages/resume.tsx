import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockTextResume } from 'components/block-text/BlockTextResume';
import { HighlightSmall } from 'components/intro/HighlightSmall';
import { Spacer } from "components/spacer/Spacer";
import { Button } from 'components/button/Button';

import pdf from 'assets/pdf/Antonio_Almena_Resume.pdf'

export default () => (
  <>
    <Helmet title="Resume" />

    <Intro subtext="Jared Stanley" to='https://www.linkedin.com/in/jaredstanley/'>
      During extremely high-stress situations requiring complex design and code deliverables, I never once saw Antonio lose his cool or drop the ball on anything. He was a great communicator, had a very thorough understanding of the technology requirements as well as a very nuanced understanding of the design system being implemented (a 500-page doc!). 
      I thoroughly enjoyed working with Antonio and would look forward to working with him again if the opportunity arose.
      I highly recommend him to any team that is looking for a solid client-facing Technology Director who is adept at shepherding complex projects out the door while maintaining design integrity and a thorough understanding of the projects' technology stack.
      👍🏽
    </Intro>

    <BlockTextResume
      heading="Technical Consultant"
      subheading="Self Employed | Oct 2018 - Present"
      description={(
        <>
          I'm an experienced UX design and development leader who creates thoughtful and powerful mobile and web applications. 
          <br /><br />
          I have experience developing (and releasing) various consumer products that contain various complex, multi-functional sub projects. I'm able to collaborate with internal teams (and client partners) while also being able to motivate and empower my team to reach ambitious goals that meet project milestones and budgetary constraints. 
          <br /><br />
          I have a design background that allows me to use my keen eye for detail on both an aesthetic and technical scale.
          <br/><br/>
          <u>Here are a few accomplishemets to help you understand my previous experience:</u>
          <br/>
          <ul>
            <li>I have 10+ years of experience specializing in department building and management in companies with 100+ employees.</li>
            <li>I've built and led a department consisting of 20+ employees ranging from engineers, producers, art directors and QA.</li>
            <li>I have experience developing and releasing various consumer products.</li>
            <li>I also have experience project managing complex, multi-functional projects.</li>
            <li>I'm able to motivate and empower my entire team to reach ambitious goals.</li>
            <li>Awarded the <a href="https://www.commarts.com/project/22631/inside-your-scion" target="_blank" rel="noopener noreferrer">Communication Arts Interactive Annual Award</a>.【ツ】</li>
          </ul>
          <br/>
          <Button to={pdf}>Download Resume</Button>
        </>
      )}
    />

    <BlockTextResume
      heading="Associate Technical Director"
      subheading="Odopod | Mar 2013 - Oct 2018"
      description={(
        <>
          Led an external team of engineers in building the responsive frontend for <a href="https://www.sony.co.uk" target="_blank" rel="noopener noreferrer">sony.co.uk</a>.<br />
          Led engineering team and architected with Sony the iOS and Chromecast applications for <a href="https://www.odopod.com/case-studies/ps-vue" target="_blank" rel="noopener noreferrer">PlayStation Vue</a>.<br /> 
          Led engineering team and worked closely with Google to help create the <a href="https://store.google.com" target="_blank" rel="noopener noreferrer">Google online store.</a><br />
          Adept at creating and managing scope, budget and timelines for various projects.<br />
          Collaborated with engineers, designers, product managers and support teams to implement our strategies across various products.
          Hands on development.
          <br/><br/>
          <HighlightSmall>Technologies Used:</HighlightSmall> HTML5, CSS3, SCSS, JavaScript, JQuery, Git, WebPack, React, Java, Swift, PHP, Yarn, Mocha, Chai, Python, Ember & Node.
        </>
      )}
    />

    <BlockTextResume
      heading="Technical Director"
      subheading="Petrol | Mar 2007 - May 2012"
      description={(
        <>
          Built and led an engineering department consisting of 20+ employees ranging from engineers, producers, art directors and QA.<br/>
          Adept at creating and leading online marketing campaigns that meet scope, budget and timeline requirements.<br/>
          Created and presented creative and technical solutions for various client projects.<br/>
          Hired, mentored and set professional goals for engineering team.<br/>
          Hands on development
          <br/><br/>
          <HighlightSmall>Technologies Used:</HighlightSmall> HTML5, CSS3, JavaScript, JQuery, PHP, MySQL, Apache, Linux & Flash. 
        </>
      )}
    />

    <BlockTextResume
      heading="Instructor"
      subheading="California State University, Northridge | Jan 2005 – Dec 2007"
      description={(
        <>
          Instructor for the Design Department. I taught the equivalent of a "Web 101" course to design students. 
          <br/><br/>
          <HighlightSmall>Technologies Used:</HighlightSmall> HTML, CSS, JavaScript, JQuery & Flash.
        </>
      )}
    />

    <BlockTextResume
      heading="Senior Engineer"
      subheading="Heavenspot | Feb 2006 – Apr 2007"
      description={(
        <>
          Architected systems and processes to standardize and streamline the development of projects.<br/>
          Conducted code reviews for team members to look for optimizations, maintain project standards, and share knowledge.<br/>
          Spearheaded internal movement to create our own code library.
          <br/><br/>
          <HighlightSmall>Technologies Used:</HighlightSmall> HTML, CSS, JavaScript , JQuery, PHP, MySQL, Apache Server, Linux & Flash.
        </>
      )}
    />

    <BlockTextResume
      heading="Senior Engineer"
      subheading="Genex | May 2003 – Feb 2006"
      description={(
        <>
          Worked with a team of engineers focused on building the marketing site for <a href="https://www.acura.com/" target="_blank" rel="noopener noreferrer">Acura.com</a>.<br/>
          Spearheaded internal movement to create our own code library.<br/>	
          Awarded the <a href="https://www.commarts.com/project/22631/inside-your-scion" target="_blank" rel="noopener noreferrer">Communication Arts Interactive Annual Award</a>.	
          <br/><br/>
          <HighlightSmall>Technologies Used:</HighlightSmall> HTML, CSS, JavaScript, JQuery, PHP & Flash.
        </>
      )}
    /> 

    <BlockTextResume
      heading="Education"
      subheading="Otis College of Art and Design | Bachelor of Fine Art"
      description={(
        <>
          Worked primarily in new media technologies (digital imaging, web technologies, computer processing) within the umbrella of the fine art curriculum as a means to find new forms of communication for my work.
        </>
      )}
    /> 

    <Spacer />
  </>
);
