import * as React from 'react';
import Helmet from 'react-helmet';

import Logo from 'assets/svg/logo.svg';
import Twitter from 'assets/svg/twitter.svg';
import Github from 'assets/svg/github.svg';
import Linkedin from 'assets/svg/linkedin.svg';

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
      <HeaderLink
        name="Resume"
        to="/resume"
      />

      <HeaderLink
        name="Contact"
        to="3238935161"
      />

      <HeaderLink
        name="github"
        to="https://github.com/9ntonio/portfolio"
        icon={<Github />}
      />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        { icon: <Github />, to: 'https://github.com/9ntonio/portfolio' },
        { icon: <Twitter />, to: 'https://twitter.com/9ntonio' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/in/antonio-almena/' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
