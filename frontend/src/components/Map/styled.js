import styled from 'styled-components';

export const Row = styled.ul`
  display: grid;
  grid-auto-flow: column;

  max-width: 40vw;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const Item = styled.li`
  height: 100%;
  aspect-ratio: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid black;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: black;
    font-weight: bold;
    &.lnr-text-align-justify {
      opacity: 0;
    }
  }
`;

export const Map = styled.section`
  display: block;
  position: relative;
  padding: 30px;
`;

export const MapBackground = styled.div`
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
`;

export const MapList = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  @media (max-width: 1024px) {
    padding: 30px;
  }
`;
