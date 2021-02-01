import styled from 'styled-components';

export const Form = styled.form `
  margin-block-start: 30px;
  margin-block-end: 30px;

  svg {
    position: relative;
    top: -31px;
    left: 16px;
  }
`;

export const Fieldset = styled.fieldset `
  border-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input `
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  border-color: transparent;
  cursor: pointer;
  padding: 12px;
  padding-left: 45px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #B9BDCF;
  margin-block-start:14px;
`;

export const Text = styled.label `
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #B9BDCF;
`;
