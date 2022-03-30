import styled from 'styled-components';

export const Controlls = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  label {
    width: 100%;
  }
`;
export const Title = styled.h4`
  font-size: 18px;
  font-weight: 300;
`;
export const Number = styled.span`
  font-size: 20px;
  padding: 5px 10px;
  border: 1px solid gray;
  width: 50px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ControlButton = styled.button`
  display: block;
  border: 1px solid gray;
  &.button-up {
    transform: rotate(180deg);
  }
  svg path {
    fill: white;
  }
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  background-color: #191932;
  padding: 10px 40px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const Description = styled.h3`
  display: block;
  font-weight: 300;
  font-size: 18px;
  strong {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  border: 1px solid gray;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.2em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 20px;
`;
