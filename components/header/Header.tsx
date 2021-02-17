import * as React from 'react';

import { Link } from 'components/link/Link';

import Logo from 'assets/svg/main-logo.svg';
import LogoSmall from 'assets/svg/logo.svg';

import s from './Header.scss';

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => (
  <header className={s.header}>
    <div className={s.header__container}>
      <div className={s.header__content}>
        <Link to="/" className="umami--click--logo">
          <Logo className={s.header__logoSvg} />
          <LogoSmall className={s.header__logoSvgSmall} />
        </Link>

        <div className={s.header__navigation}>{children}</div>
      </div>
    </div>
  </header>
);
