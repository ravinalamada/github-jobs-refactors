import React from 'react';
import { Form, Fieldset, Input, Text} from './styles/formLoc'

export default function FormLocation({children, ...restProps}) {
  return (
    <Form {...restProps}>
      {children}
    </Form>
  )
}

FormLocation.Fieldset = function FormLocationFieldset({children, ...restProps}) {
  return <Fieldset {...restProps}>{children}</Fieldset>
}

FormLocation.Text = function FormLocationText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

FormLocation.Input = function FormLocationInput({children, ...restProps}) {
  return <Input {...restProps}>{children}</Input>
}
