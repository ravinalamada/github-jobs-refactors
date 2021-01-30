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
      </FormLocation.Fieldset>
    </FormLocation>
  )
}
