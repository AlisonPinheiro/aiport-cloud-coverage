import React from 'react';
import Counter from './counter';

import * as S from './styled';

function Counters(props) {
  const { counters, onIncrement, onDecrement, onSend, firstAirportCovered, allAirportsCovered } =
    props;
  return (
    <S.Aside>
      <S.Description>
        The first airport will be hit by clouds in{' '}
        <strong>{firstAirportCovered ? firstAirportCovered : '0'} days </strong> and all the
        airports will be covered by the clouds in{' '}
        <strong>{allAirportsCovered ? allAirportsCovered : '0'} days </strong>
      </S.Description>

      <S.Controlls>
        {counters
          ? counters.map((counter) => (
              <Counter
                key={counter.id}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onSend={onSend}
                counter={counter}></Counter>
            ))
          : ''}
        <S.Button onClick={() => props.onSend(counters)}>Calculate</S.Button>
      </S.Controlls>
      <S.Title>Use controls to calculate time</S.Title>
    </S.Aside>
  );
}

export default Counters;
