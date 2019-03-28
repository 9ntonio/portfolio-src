import * as React from 'react';
import Img from "gatsby-image"

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './PortfolioBlock.scss';


interface IPortfolioData {
  heading: string;
  description: string;
  fluid: any;
  to: string;
}

interface IPortfolioBlockProps {
  data: IPortfolioData[];
}

export const PortfolioBlock = ({ data }: IPortfolioBlockProps) => (
  <Container>

    {data.map((item) => (
      <div className={s.portfolio}>
        <Row>
          <div className={s.portfolio__pic}>
            <a href={item.to} target="_blank" rel="noopener noreferrer">  
              {item.fluid}
            </a>
          </div>
          <div className={s.portfolio__col}>
            <h3 className={s.portfolio__heading}>{item.heading}</h3>
            <p className={s.portfolio__description}>{item.description}</p>
          </div>
        </Row>
      </div>
    ))}

  </Container>
);
