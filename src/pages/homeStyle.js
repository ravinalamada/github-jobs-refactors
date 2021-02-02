import styled from 'styled-components';

export const Container = styled.section `

  @media(min-width: 1000px) {
    max-width: 1114px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 30% 1fr;
    column-gap: 32px;
    align-items: flex-start;
  }

  a {
    text-transform: none;
  }

`;
export const Wrapper = styled.div `

  margin-left: 16px;
  margin-right: 16px;

  @media (min-width: 1000px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Frame = styled.div `
  display: flex;
  justify-content: flex-end;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }

  li {
    list-style: none;
    border: 1px solid #B7BCCE;
    box-sizing: border-box;
    border-radius: 4px;
    margin-right: 12px;
    padding-top: 12.5px;
    padding-left: 14px;
    padding-bottom: 14.5px;
    padding-right: 14px;
  }

  li:hover {
    border: 1px solid #1E86FF;
  }

  li:first-child,
  li:last-child {
    display:none;
  }

  a {
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
    color: #B9BDCF
  }

  a:hover{
    color: white;
  }

  .isCliked {
    background-color:  #1E86FF;
    color: white;
  }

  @media (min-width: 1000px) {
      max-width: 1114px;
      margin-left: auto;
      margin-right: auto;
  }
`;



