import React from 'react'
// import { Wrapper } from '../form/styles/form'
import { Article, Container, Wrapper, Frame, Image, Link, SubTitle ,Text, Title, SmallText } from './styles/jobDetails';

export default function JobDetails({children, ...restProps}) {
  return (
    <Article {...restProps}>
      {children}
    </Article>
  )
}

JobDetails.Container = function JobDetailsContainer({children, ...restProps}) {
  return (<Container {...restProps}>{children}</Container>)
}

JobDetails.Wrapper = function JobDetailsWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

JobDetails.Image = function JobDetailsImage({...restProps}) {
  return (<Image {...restProps} />)
}

JobDetails.Link = function JobDetailsLink({children, ...restProps}) {
  return (<Link {...restProps}>{children}</Link>)
}

JobDetails.Frame = function JobDetailsFrame({children, ...restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}

JobDetails.Title = function JobDetailsTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

JobDetails.SubTitle = function JobDetailsSubTitle({children, ...restProps}) {
  return (<SubTitle {...restProps}>{children}</SubTitle>)
}

JobDetails.Text = function JobDetailsText({children, ...restProps}) {
  return (<Text {...restProps}>{children}</Text>)
}

JobDetails.SmallText = function JobDetailsSmallText({children, ...restProps}) {
  return (<SmallText {...restProps}>{children}</SmallText>)
}
