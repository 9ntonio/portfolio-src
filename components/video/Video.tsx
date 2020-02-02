import * as React from 'react';
import ReactPlayer from 'react-player';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Video.scss';

interface IVideoProp {
  to: string;
  header: string;
}

export const Video = ({to, header}: IVideoProp) => (
  <>
  <Container>
    <div className={s.video}>
      <Row>
        <div className={s.video__col}>
          <div className={s.video__description}>
            <h3>{header}</h3>
          </div>
        </div>
      </Row>

      <Row>
        <div className={s.video__col}>
          <div className={s.player_wrapper}>
            <ReactPlayer
              className={s.react_player}
              url={to}
              width='100%'
              height='100%'
              playing
            />
          </div>
        </div>
      </Row>
    </div>
  </Container>
  </>
);
