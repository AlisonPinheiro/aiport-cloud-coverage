import React from 'react';
import Row from './Row';
import { ReactComponent as MapIcon } from './mapIcon.svg';

import * as S from './styled';

const Map = (state) => {
  return (
    <S.Map>
      <S.MapList>
        {state.list
          ? state.list.map((list, index) => {
              return <Row key={index} content={list}></Row>;
            })
          : ''}
      </S.MapList>
      <S.MapBackground>
        <MapIcon />
      </S.MapBackground>
    </S.Map>
  );
};
export default Map;
