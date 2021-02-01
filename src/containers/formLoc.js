import React,  { useContext, useState } from 'react';
import { Context } from '../context/globalContextProvider';
import { FormLocation } from '../components';

export default function FormLocationContainer() {
  const {state, dispatch} = useContext(Context);
  const { loading, jobs } = state;
  const [location, setLocation ] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    // This filter the Job title and company name
    const searchJobByCity = !loading && jobs && jobs.filter(job => job.location.toLowerCase() === location.toLowerCase());
    dispatch({ type: 'SEARCH_JOB_BY_CITY', searchJobByCity });
    alert(`There are ${searchJobByCity.length}  jobs in there`);
    setLocation('')
  }

  return (
    <FormLocation onSubmit={handleSubmit}>
      <FormLocation.Fieldset>
        <FormLocation.Text>Location</FormLocation.Text>
        <FormLocation.Input
        type="text"
        placeholder="City, state, zip code or"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 2C5.36 2 2 5.36 2 9.5C2 13.64 5.36 17 9.5 17C13.64 17 17 13.64 17 9.5C17 5.36 13.64 2 9.5 2ZM8.75 15.4475C5.7875 15.08 3.5 12.56 3.5 9.5C3.5 9.035 3.56 8.5925 3.6575 8.1575L7.25 11.75V12.5C7.25 13.325 7.925 14 8.75 14V15.4475ZM13.925 13.5425C13.73 12.935 13.175 12.5 12.5 12.5H11.75V10.25C11.75 9.8375 11.4125 9.5 11 9.5H6.5V8H8C8.4125 8 8.75 7.6625 8.75 7.25V5.75H10.25C11.075 5.75 11.75 5.075 11.75 4.25V3.9425C13.9475 4.835 15.5 6.9875 15.5 9.5C15.5 11.06 14.9 12.4775 13.925 13.5425Z" fill="#B9BDCF"></path></svg>
      </FormLocation.Fieldset>
    </FormLocation>
  )
}
