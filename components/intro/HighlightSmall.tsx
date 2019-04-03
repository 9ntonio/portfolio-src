import * as React from 'react';

import s from './HighlightSmall.scss';

interface IHighlightSmallProps {
  children: string;
}

export const HighlightSmall = ({ children }: IHighlightSmallProps) => {
  const renderWords = () => {
    const words = children.split(' ');
    const { length } = words;

    return words.map((word, index) => (
      <span key={word} className={s(s.highlight_small, { isFirst: length > 1 && index === 0 })}>
        <span className={s.highlight_small__text}>{word}</span>
        <span className={s.highlight_small__color} />
      </span>
    ));
  };

  return (
    <>
      {renderWords()}
    </>
  );
};
