import * as React from 'react';
import ReactPlayer from 'react-player';
import ReactHtmlParser from 'react-html-parser';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Video.scss';

interface IVideoProp {
  to: string;
  header: string;
  description: string;
  link:string;
}

export const Video = ({to, header, description, link}: IVideoProp) => {
  if(description === undefined) {
    return (
      <>
      <Container>
        <div className={s.video}>
          <Row>
            <div className={s.video__col}>
              <h3 className={s.video__heading}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {header}
                </a>
              </h3>
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
                  controls={true}
                  frameborder='0'
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                />
              </div>
            </div>
          </Row>
        </div>
      </Container>
      </>
    )
  } else {
    return (
      <>
      <Container>
        <div className={s.video}>
          <Row>
            <div className={s.video__col}>
              <h3 className={s.video__heading}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {header}
                </a>
              </h3>
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
                  controls={true}
                  frameborder='0'
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                />
              </div>
            </div>
          </Row>

          <Row>
            <div className={s.video__col}>
              <div className={s.video__description}>
                <p>{ ReactHtmlParser (description) }</p>
              </div>
            </div>
          </Row>
        </div>
      </Container>
      </>
    )
  }
};
