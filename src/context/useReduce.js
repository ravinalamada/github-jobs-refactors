import {useReducer, useEffect} from 'react';
import axios from 'axios';
const endpoint = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code';

function useReduce() {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCH_JOBS": {
        return {...state, loading: false, jobs: action.job}
      }
      case "SEARCH_JOB_BY_TITLE_COMPANY": {
        return {...state, loading: false, jobs: action.searchJobByTitleAndCompany}
      }
      case "SEARCH_JOB_BY_LOCATION" : {
        return {...state, loading: false, jobs: action.searchCity }
       }

      case "TYPE_OF_JOB": {
        return {...state, loading: false, jobs: action.jobType}
      }

      case "SEARCH_JOB_BY_CITY": {
        return {...state, loading: false, jobs: action.searchJobByCity}
      }

      case "FETCH_JOB_DETAILS_DATA": {
        return {...state, loading: false, jobDetails: action.details}
      }
       default:
          return state
     }
   }, {
    loading: true,
    isCheked: false,
    jobs: [],
    jobDetails: {},
  })

  // Fetch the jobs data
  async function getJobs() {
    const fetchJobs = await axios(endpoint);
    dispatch({type:"FETCH_JOBS", job: fetchJobs.data})
  }

  // This dispatched the type of fetch jobs
   useEffect(() => {
     setTimeout(() => {
       dispatch({type:"FETCH_JOBS"})
       getJobs()
     }, 500)
   }, [])

   // return the state and dispatch that I am going to use
  return {state, dispatch, getJobs}
}



export default useReduce
