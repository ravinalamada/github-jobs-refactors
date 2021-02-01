import React from 'react'
import {
         Wrapper,
         Item,
         Title,
         Text,
         Image,
         Frame,
         SubWrapper,
        SmallText } from './styles/feature';

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

Feature.SmallText = function FeatureSmallText({children,restProps}) {
  return (<SmallText {...restProps}>{children}</SmallText>)
}

