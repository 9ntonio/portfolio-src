import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';
import { HighlightSmall } from 'components/intro/HighlightSmall';

import s from './Intro.scss';

interface IIntroProps {
  children: React.ReactNode;
  subtext: string;
  to: string;
}

export const Intro = ({ children, subtext, to }: IIntroProps) => {
  if(subtext != undefined && to != undefined) {
    return (
      <Container>
        <div className={s.intro}>
          <Row>
            <div className={s.intro__col}>
              <p className={s.intro__text}>
                {children}
              </p>
              <p className={s.intro__subtext}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={to}
                >
                  <HighlightSmall>
                    {subtext}
                  </HighlightSmall>
                </a>
              </p>
            </div>
          </Row>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className={s.intro}>
          <Row>
            <div className={s.intro__col}>
              <p className={s.intro__text}>
                {children}
              </p>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
};
