import * as React from 'react';
import ReactPlayer from 'react-player'

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Video.scss';

interface IVideoProp {
  to: string;
}


export const Video = ({to} : IVideoProp) => (
  <>
  <Container>
  <div className={s.video}>
      <Row>
        <div className={s.video__col}>
          <div className={s.video__description}>
            <h3>While you're here, enjoy a bit of Paris.</h3>
          </div>
        </div>
        <div className={s.video__vid}>
          <ReactPlayer url={to} />
        </div>
      </Row>
    </div>
  </Container>
  </>
);
