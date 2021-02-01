import styled from 'styled-components';

export const Container = styled.div ``;
export const Wrapper = styled.div `

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 8px;
    border: 8px solid  #334680;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color:  #334680 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`
export const Text = styled.div `

 color: #334680;
 font-size: 40px;
 font-weight: bold;
`;
