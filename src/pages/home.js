import React from 'react';
import { Container, Wrapper } from '../pages/homeStyle';
import HeaderContainer from '../containers/header';
import JobsContainer from '../containers/jobs';
import FormContainer from '../containers/form';
import CityContainer from '../containers/city';
import { Header} from '../components'

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Header.Background>
          <FormContainer />
        </Header.Background>
      </HeaderContainer>
      <Container>
        <CityContainer />
        <JobsContainer />
      </Container>

    </>
  )
}
