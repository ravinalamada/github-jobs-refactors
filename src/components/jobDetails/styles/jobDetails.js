import styled from 'styled-components';

export const Article = styled.article `
  margin-left: 16px;
  margin-right: 16px;

  @media (min-width: 1000px) {
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 30% 1fr;
    column-gap: 40px;
    align-items: flex-start;
  }

`;

export const Title = styled.h2 `
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #B9BDCF;

`;


export const Container = styled.div `

  text-align: left;
  max-width: 50%;

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #1E86FF;
  }

  div {

    h2 {
      font-size: 20px;
      line-height: 28px;
      color: #334680;
      margin-bottom: 0;
    }

  }

`;

export const Wrapper = styled.div `
  margin-bottom: 35px;

  div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 17px;
      align-items: flex-end;
      margin-bottom: 10px;
    }

`;

export const Frame = styled.div `

  div {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: flex-start;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    margin: 0;
  }

  div:nth-of-type(2) {
    position: relative;
    left: 67px;
    top: -21px;
  }
`;


export const Image = styled.img `
  width: 60px;
  height: 60px;
  border-radius: 4px;
`;

export const SubTitle = styled.h3 `
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #334680;
`;

export const Text = styled.p `
  line-height: 150%;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

export const Link = styled.div `
  p {
    a {
      padding-right: 30px;
    }
  }

`;

export const SmallText = styled.p `
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #B7BCCE;
  margin: 0;
`;
