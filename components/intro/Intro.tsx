import * as React from 'react';
import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';
import { HighlightSmall } from 'components/intro/HighlightSmall';

import s from './Intro.scss';

interface IIntroProps {
  children: React.ReactNode;
  subtext: string;
  to: string;
  eventName: string;
}

export const Intro = ({ children, subtext, to, eventName }: IIntroProps) => {
  if (subtext !== undefined && to !== undefined) {
    return (
      <Container>
        <div className={s.intro}>
          <Row>
            <div className={s.intro__col}>
              <span className={s.intro__text}>{children}</span>
              <span className={s.intro__subtext}>
                <a target="_blank" rel="noopener noreferrer" className={eventName} href={to}>
                  <HighlightSmall>{subtext}</HighlightSmall>
                </a>
              </span>
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
              <span className={s.intro__text}>{children}</span>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
};
