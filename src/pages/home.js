import React from 'react';
import HeaderContainer from '../containers/header';
import JobsContainer from '../containers/jobs';
import FormContainer from '../containers/form';
import { Header} from '../components'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Header.Background>
          <FormContainer />
        </Header.Background>
      </HeaderContainer>
      <JobsContainer />
    </>
  )
}
