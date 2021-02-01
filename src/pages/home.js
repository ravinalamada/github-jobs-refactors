import React, {useContext, useState} from 'react';
import Pagination from 'react-js-pagination';
import { Context } from '../context/globalContextProvider';
import { Container, Wrapper, Frame } from '../pages/homeStyle';
import HeaderContainer from '../containers/header';
import JobsContainer from '../containers/jobs';
import FormContainer from '../containers/form';
import CityContainer from '../containers/city';
import FormTypeContainer from '../containers/formType';
import FormLocationContainer from '../containers/formLoc';
import { Header} from '../components'

export default function Home() {
 const {activeJobs, totalPages, activePage, setActivePage, state} = useContext(Context);
const { loading ,jobs } = state;
const [isClicked, setIsCliked ] = useState(false);

// const totalJobsPages = ;

  function displayPages(num) {
    setIsCliked(true);
    setActivePage(num)
  }

  return (
    <>
      <HeaderContainer>
        <Header.Background>
          <FormContainer />
        </Header.Background>
      </HeaderContainer>
      <Container>
        <Wrapper>
          <FormTypeContainer />
          <FormLocationContainer />
          <CityContainer />
        </Wrapper>
        <JobsContainer />
      </Container>
      <Frame>
        <Pagination
          className={isClicked ? 'isCliked' : ''}
          pageRangeDisplayed={3}
          activePage={activePage}
          itemsCountPerPage={6}
          totalItemsCount={!loading && jobs && jobs.length}
          onChange={displayPages}
        />
      </Frame>
    </>
  )
}
