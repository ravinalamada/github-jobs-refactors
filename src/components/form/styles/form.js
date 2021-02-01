import styled from 'styled-components';

export const Container = styled.div ``;

export const Base = styled.form `
  padding-top: 62px;
  padding-bottom: 62px;
  padding-left: 18px;
  padding-right: 18px;

  svg {
    position: relative;
    top: -47px;
    left: 15px;
  }
`;

export const Wrapper = styled.div `
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: #FFFFFF;
`;

export const Frame = styled.div `
  display: grid;
  grid-template-columns: 80% 1fr;
`;

export const Fieldset = styled.fieldset `
  border-color: transparent;
  margin: 0;
  padding: 0;
`;

export const Input = styled.input `
  padding-left: 16px;
  border-color: transparent;
  width: 100%;
  height: 90%;
  cursor: pointer;
  padding-left: 42px;
`;

export const Submit = styled.button `
  background: #1E86FF;
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-top: 18px;
  padding-bottom: 18px;
  border-color: transparent;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

