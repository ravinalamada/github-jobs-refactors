import styled from 'styled-components';

export const Item = styled.li `
  list-style: none;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 32px;
  list-style: none;
  margin-right: 16px;
  margin-left: 16px;
`;
export const Wrapper = styled.div `
  display: grid;
  grid-template-columns: 20% 1fr;
  column-gap: 50px;
  align-items: flex-start;
`;

export const SubWrapper = styled.div `
  display: flex;
  justify-content: flex-end;
`;

export const Frame = styled.div ``;

export const Title = styled.h3 `
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #334680;
`;

export const Text = styled.p `
  margin-top: 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #334680;
`;

export const LogoCity = styled.p `
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  color: #B9BDCF;
`;

export const LogoDate = styled.p `
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  color: #B9BDCF;
`;

export const Image = styled.img `
  max-width: 100px;
`;
