import React from 'react';
import {
	Container,
	Input,
	Base,
	Submit,
  Fieldset,
  Wrapper,
} from './styles/form';

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}


Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
	return <Submit {...restProps}>{children}</Submit>;
};

Form.Fieldset = function FormFieldset({ children, ...restProps }) {
	return <Fieldset {...restProps}>{children}</Fieldset>;
};

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};
