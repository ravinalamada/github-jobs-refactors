import React from 'react';
import { Feature, Buttons } from '../components';

export default function FeatureContainer({job, toggleItems}) {
 const dateStr = job.created_at;
 const date = new Date(dateStr);
 const days = date.getDay() + 1;

  return (
    <Feature onClick={toggleItems}>
      <Feature.Wrapper>
        <Feature.Image src={job.company_logo} alt={job.title} />
        <Feature.Frame>
          <Feature.Text>{job.company}</Feature.Text>
          <Feature.Title>{job.title}</Feature.Title>
          <Buttons>{job.type}</Buttons>
        </Feature.Frame>
      </Feature.Wrapper>
      <Feature.SubWrapper>
        <Feature.LogoCity>{job.location}</Feature.LogoCity>
        <Feature.LogoDate>{days} {days > 1 ? 'days' : 'day'} ago</Feature.LogoDate>
      </Feature.SubWrapper>
    </Feature>
  )
}
