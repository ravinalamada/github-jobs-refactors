
import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import {Link,useParams} from 'react-router-dom';
import {Context} from '../context/globalContextProvider';
import { JobDetails } from '../components';
import HeaderContainer from '../containers/header';

// These are the url that I am going to fetch
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/';

// Fetch and display the job data from Job's id
function JobDetailsContainer() {
  const {jobId}= useParams();
  const {state, dispatch}= useContext(Context);
  const {jobDetails, loading} = state;


  // Fetch the job details
  async function getJobDetail() {
    const fetchJobDetail= await axios(BASE_URL+`${jobId}.json`);
    // Dispatch the data
    dispatch({type:"FETCH_JOB_DETAILS_DATA", details: fetchJobDetail.data})
  }

  useEffect(() => {
    setTimeout(() => {
      getJobDetail();
    }, 500)
  }, []);

  return (
    <>
    <HeaderContainer />
    <JobDetails>
      <JobDetails.Wrapper>
        <Link to="/">← Go back to seach</Link>
        <JobDetails.Title>How to apply</JobDetails.Title>
        <JobDetails.Text dangerouslySetInnerHTML={{__html: jobDetails.how_to_apply}} />
      </JobDetails.Wrapper>
      <JobDetails.Wrapper>
        <div>
          <JobDetails.Title>{jobDetails.title}</JobDetails.Title>
          {/* <JobDetails.SubTitle className="job--type">{jobDetails.type}</JobDetails.SubTitle> */}
          <JobDetails.SmallText>{jobDetails.created_at}</JobDetails.SmallText>
        </div>
        <JobDetails.Frame>
          <JobDetails.Image src={jobDetails.company_logo} alt="Image"/>
          <JobDetails.Title>{jobDetails.company}</JobDetails.Title>
          {/* <JobDetails.SubTitle>{jobDetails.location}</JobDetails.SubTitle> */}
        </JobDetails.Frame>
        <JobDetails.Text dangerouslySetInnerHTML={{__html: jobDetails.description}} />
      </JobDetails.Wrapper>
    </JobDetails>
  </>
  )
}

export default JobDetailsContainer;
