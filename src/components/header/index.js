import React from 'react';
import { Container, Background,  Title, Frame } from './styles/header'

function Header({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}


Header.Background = function HeaderBackground({children, ...restProps}) {
  return <Background {...restProps}>{children}</Background>
}

Header.Title = function HeaderTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
  return <Frame {...restProps}>{children}</Frame>
}



export default Header
