import React from 'react'
import {Container, Wrapper, Text} from '../../pages/homeStyle'

export default function Loading({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Loading.Wrapper = function LoadingWrapper({children, ...restProps}) {
  <Wrapper {...restProps}>{children}</Wrapper>
}

Loading.Text = function LoadingText({children, ...restProps}) {
  <Text {...restProps}>{children}</Text>
}
