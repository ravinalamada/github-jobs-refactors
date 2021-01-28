import React from 'react'
import { Background, Frame } from './styles/header'

function Header({children, ...restProps}) {
  return (
    <Background {...restProps}>
      {children}
    </Background>
  )
}

Header.Frame = function HeaderFrame({children}) {
  <Frame {...restProps}>{children}</Frame>
}



export default Header
