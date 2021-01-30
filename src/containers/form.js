import React,  {useContext, useState} from 'react';
import {Context} from '../context/globalContextProvider';
import { Form } from '../components';

export default function FormContainer() {
  const {state, dispatch} = useContext(Context);
  const {loading, jobs} = state;
  const [searchJob, setSearchJob] = useState('');

  function submitSearchJob(e) {
    e.preventDefault();

    // This filter the Job title and company name
    const searchJobByTitleAndCompany = !loading && jobs && jobs.filter(job => job.title.toLowerCase() === searchJob.toLowerCase());
    dispatch({ type: 'SEARCH_JOB_BY_TITLE_COMPANY', searchJobByTitleAndCompany });
    alert(`There are ${searchJobByTitleAndCompany.length}  jobs in there`);
    setSearchJob('')
  }

  return (
    <Form.Base onSubmit={submitSearchJob}>
      <Form.Wrapper>
        <Form.Frame>
          <Form.Fieldset>
            <Form.Input
            type='text'
            className="form__input"
            name="filter"
            placeholder="Title, companies, experti..."
            value={searchJob}
            onChange={(e) => setSearchJob(e.target.value)}
            />
          </Form.Fieldset>
          <Form.Submit>Search</Form.Submit>
        </Form.Frame>
      </Form.Wrapper>
    </Form.Base>
    )
  }
