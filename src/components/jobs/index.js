import React from 'react'
import { Container } from './styles/jobs'

export default function Jobs({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}
