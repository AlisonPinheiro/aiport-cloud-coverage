import React, { useState, useEffect } from 'react';
import { ReactComponent as Arrow } from './arrow.svg';

import * as S from './styled';

function Counter(props) {
  const [count, setCount] = useState(props.counter.value);
  useEffect(() => {
    if (count > props.counter.value) {
      props.onIncrement(props.counter, count);
    } else {
      props.onDecrement(props.counter, count);
    }
  }, [count]);

  return (
    <S.Wrapper>
      <S.Label> {props.counter.label}</S.Label>
      <S.Control>
        <S.Number>{count}</S.Number>
        <span>
          <S.ControlButton onClick={() => setCount(count + 1)} className="button-up">
            <Arrow />
          </S.ControlButton>
          <S.ControlButton
            onClick={() => setCount(count - 1)}
            disabled={count === props.counter.minValue}>
            <Arrow />
          </S.ControlButton>
        </span>
      </S.Control>
    </S.Wrapper>
  );
}

export default Counter;
