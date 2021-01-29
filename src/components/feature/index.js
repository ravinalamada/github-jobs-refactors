import React from 'react'
import {
         Wrapper,
         Item,
         Title,
         Text,
         Image,
         Frame,
         SubWrapper,
        LogoCity,
        LogoDate } from './styles/feature';

export default function Feature({children, ...restProps}) {
  return (
    <Item {...restProps}>
      {children}
    </Item>
  )
}

Feature.Title = function FeatureTitle({children,restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

Feature.Text = function FeatureText({children,restProps}) {
  return (<Text {...restProps}>{children}</Text>)
}

Feature.Wrapper = function FeatureWrapper({children,restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Feature.SubWrapper = function FeatureSubWrapper({children,restProps}) {
  return (<SubWrapper {...restProps}>{children}</SubWrapper>)
}

Feature.Image = function FeatureImage({...restProps}) {
  return (<Image {...restProps} />)
}

Feature.Frame = function FeatureFrame({children,restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}

Feature.LogoCity = function FeatureLogoCity({children,restProps}) {
  return (<LogoCity {...restProps}>{children}</LogoCity>)
}
Feature.LogoDate = function FeatureLogoDate({children,restProps}) {
  return (<LogoDate {...restProps}>{children}</LogoDate>)
}
