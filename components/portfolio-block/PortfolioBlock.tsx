import * as React from 'react';
// import Img from 'gatsby-image';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './PortfolioBlock.scss';

interface IPortfolioData {
  heading: string;
  description: string;
  image: any;
  to: string;
  eventName: string;
}

interface IPortfolioBlockProps {
  data: IPortfolioData[];
}

export const PortfolioBlock = ({ data }: IPortfolioBlockProps) => (
  <Container>
    {data.map((item, i) => (
      <div className={s.portfolio} key={i}>
        <Row>
          <div className={s.portfolio__pic}>
            <a href={item.to} target="_blank" rel="noopener noreferrer" className={item.eventName}>
              {item.image}
            </a>
          </div>
          <div className={s.portfolio__col}>
            <h3 className={s.portfolio__heading}>
              <a href={item.to} target="_blank" rel="noopener noreferrer" className={item.eventName}>
                {item.heading}
              </a>
            </h3>
            <p className={s.portfolio__description}>
              {item.description}
            </p>
          </div>
        </Row>
      </div>
    ))}
  </Container>
);
