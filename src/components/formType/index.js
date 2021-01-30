import React from 'react';
import { Form, Fieldset, Input, Text} from './styles/formTypes'

export default function FormType({children, ...restProps}) {
  return (
    <Form {...restProps}>
      {children}
    </Form>
  )
}

FormType.Fieldset = function FormTypeFieldset({children, ...restProps}) {
  return <Fieldset {...restProps}>{children}</Fieldset>
}

FormType.Input = function FormTypeInput({children, ...restProps}) {
  return <Input {...restProps}>{children}</Input>
}

FormType.Text = function FormTypeText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}
