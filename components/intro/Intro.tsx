import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';
import { HighlightSmall } from 'components/intro/HighlightSmall';

import s from './Intro.scss';

interface IIntroProps {
  children: React.ReactNode;
  subtext: string;
}

export const Intro = ({ children, subtext }: IIntroProps) => {
  if(subtext != undefined) {
    return (
      <Container>
        <div className={s.intro}>
          <Row>
            <div className={s.intro__col}>
              <p className={s.intro__text}>
                {children}
              </p>
              <p className={s.intro__subtext}>
                <HighlightSmall>
                  {subtext}
                </HighlightSmall>
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
