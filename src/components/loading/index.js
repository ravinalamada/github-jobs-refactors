import React from 'react'
import {Container, Wrapper, Text } from './styles/loading'

export default function Loading({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Loading.Wrapper = function LoadingWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Loading.Text = function LoadingText({children, ...restProps}) {
  return (<Text {...restProps}>{children}</Text>
)}
