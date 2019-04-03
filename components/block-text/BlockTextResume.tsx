import * as React from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './BlockTextResume.scss';

interface IBlockResumeProps {
  heading: string;
  subheading: string;
  description: React.ReactNode;
}

export const BlockTextResume = ({ heading, subheading, description }: IBlockResumeProps) => (
  <Container>
    <div className={s.block_resume}>
      <Row>
        <div className={s.block_resume__col}>
          <h3 className={s.block_resume__heading}>{heading}</h3>
          <h4 className={s.block_resume__subheading}>{subheading}</h4>
          <span className={s.block_resume__description}>{description}</span>
        </div>
      </Row>
    </div>
  </Container>
);
