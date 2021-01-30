import React, { useContext, useState } from 'react';
import { FormType } from '../components';
import { Context } from '../context/globalContextProvider';

export default function FormTypeContainer() {
  const {state, dispatch} = useContext(Context);
  const { loading, jobs } = state;

  function handleSubmit(e) {
    e.preventDefault();
    const searchFullTimeJobs = !loading && jobs && jobs.filter(job => job.type.includes('Full Time'));
    dispatch({type: 'TYPE_OF_JOB', jobType: searchFullTimeJobs})
  }


  return (
    <FormType>
      <FormType.Fieldset>
        <FormType.Text>Full time</FormType.Text>
        <FormType.Input type="checkbox"
         onChange={handleSubmit}/>
      </FormType.Fieldset>
    </FormType>
  )
}
