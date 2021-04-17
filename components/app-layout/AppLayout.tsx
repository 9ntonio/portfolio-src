import * as React from 'react';
import Helmet from 'react-helmet';

import Logo from 'assets/svg/logo.svg';
import Twitter from 'assets/svg/twitter.svg';
import Github from 'assets/svg/github.svg';
import Linkedin from 'assets/svg/linkedin_2.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="Resume" eventName="umami--click--nav-resume" to="/resume" />

      <HeaderLink
        name="Contact"
        eventName="umami--click--nav-contact"
        to="mailto:antonio@spacebase.one"
      />

      <HeaderLink
        name="github"
        eventName="umami--click--nav-github"
        to="https://github.com/9ntonio"
        icon={<Github />}
      />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        {
          icon: <Github />,
          eventName: 'umami--click--footer-github',
          to: 'https://github.com/9ntonio',
        },
        {
          icon: <Twitter />,
          eventName: 'umami--click--footer-twitter',
          to: 'https://twitter.com/9ntonio',
        },
        {
          icon: <Linkedin />,
          eventName: 'umami--click--footer-linkedin',
          to: 'https://www.linkedin.com/in/antonio-almena/',
        },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
