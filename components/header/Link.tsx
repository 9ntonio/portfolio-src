import * as React from 'react';

import { Link as InternalLink } from 'components/link/Link';

import s from './Link.scss';

interface ILinkProps {
  name: string;
  to: string;
  icon?: React.ReactNode;
}

export const Link = ({ name, to, icon }: ILinkProps) => {
  const isLink = (typeof to !== 'undefined');
  const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');
  const isEmail = isLink && /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.])/.test(to);
  const isPhone = isLink && /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(to);

  const content = () => (
    <>
      {icon && React.cloneElement((icon as any), { className: s.link__icon })}
      {name}
    </>
  );

  if (isExternal) {
    return (
      <a
        className={s.link}
        target="_blank"
        rel="noopener noreferrer"
        href={to}
      >
        {content()}
      </a>
    );
  } else if (isEmail) {
    return (
      <a
        className={s.link}
        href={'mailto:' + to}
      >
        {content()}
      </a>
    );
  } else if (isPhone) {
    return (
      <a
        className={s.link}
        href={'sms:' + to}
      >
        {content()}
      </a>
    );
  }

  return (
    <InternalLink
      className={s.link}
      to={to}
    >
      {content()}
    </InternalLink>
  );
};
