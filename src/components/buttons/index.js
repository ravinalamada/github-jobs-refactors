import React from 'react';
import {Button} from './styles/buttons'

export default function Buttons({children, ...restProps}) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  )
}
