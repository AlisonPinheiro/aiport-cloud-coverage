import React from 'react';

import * as S from './styled';

const Row = (props) => {
  return (
    <S.Row>
      {props.content
        ? props.content.map((item, index) => (
            <S.Item key={index}>
              <span className={`lnr lnr-${item}`}></span>
            </S.Item>
          ))
        : ''}
    </S.Row>
  );
};

export default Row;
