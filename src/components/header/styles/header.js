import styled from 'styled-components';

export const Container = styled.header `
  padding: 16px;

  @media(min-width: 1000px) {
    max-width: 1114px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Background = styled.section `
  background-image: url('./images/backgroundImg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-color: transparent;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const Title = styled.h1 ``;

export const Frame = styled.div ``;
