import styled from 'styled-components';

export const Container = styled.section `

  @media(min-width: 1000px) {
    display: grid;
    grid-template-columns: 20% 1fr;
    column-gap: 32px;
    align-items: flex-start;
  }

  a {
    text-transform: none;
  }

`;
export const Wrapper = styled.div ``;

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

  li:focus {
    background-color:  #1E86FF;

    a {
      color: white;
    }
  }

  a {
    text-decoration: none;
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
    color: #B9BDCF
  }

  a:hover{
    color: #1E86FF;
  }
`;

