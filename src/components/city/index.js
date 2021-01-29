import React from 'react'
import { Form, Fieldset, Input, Text } from './styles/city'

export default function City({children, ...restProps}) {
  return (
    <Form {...restProps}>
      {children}
    </Form>
  )
}

City.Fieldset = function CityFieldset({children, ...restProps}) {
  return <Fieldset {...restProps}>{children}</Fieldset>
}

City.Input = function CityInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

City.Text = function CityText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

;
