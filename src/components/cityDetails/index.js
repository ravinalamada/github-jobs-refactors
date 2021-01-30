import React from 'react'
// import { Wrapper } from '../form/styles/form'
import { Container, Wrapper, Frame, Image ,Text, Title, SmallText } from './styles/cityDetails';

export default function CityDetails({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

CityDetails.Wrapper = function CityDetailsWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

CityDetails.Image = function CityDetailsImage({...restProps}) {
  return (<Image {...restProps} />)
}

CityDetails.Frame = function CityDetailsFrame({children, ...restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}

CityDetails.Title = function CityDetailsTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

CityDetails.SubTitle = function CityDetailsSubTitle({children, ...restProps}) {
  return (<SubTitle {...restProps}>{children}</SubTitle>)
}

CityDetails.Text = function CityDetailsText({children, ...restProps}) {
  return (<Text {...restProps}>{children}</Text>)
}

CityDetails.SmallText = function CityDetailsSmallText({children, ...restProps}) {
  return (<SmallText {...restProps}>{children}</SmallText>)
}
