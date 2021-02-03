import React, {useState, useContext, useEffect} from 'react';
import { City } from '../components';
import { cityData } from '../fixtures/cityData';
import {Context } from '../context/globalContextProvider';

export default function CityContainer() {
  const [londonCity, setLondonCity] = useState(cityData);
  const [checkboxesValue, setCheckboxesValue] = useState('');
  const { state, dispatch } = useContext(Context);
  const {loading, jobs } = state;

  function handleChange(e) {
    e.preventDefault();
    setCheckboxesValue(e.target.value);
  }

  useEffect(() => {
    const inputValue = checkboxesValue;
    const searchCity = !loading && jobs && jobs.filter(job => job.location.toLowerCase().includes(inputValue.toLowerCase()))
    dispatch({ type: 'SEARCH_JOB_BY_LOCATION', searchCity });
  }, [checkboxesValue])

  return (
    <City>
     {cityData.map(city => (
      <City.Fieldset key={city.id}>
        <City.Text htmlFor="berlin">{city.city}</City.Text>
        <City.Input
          type="radio"
          name="city"
          id={city.id}
          value={city.city}
          onChange={handleChange} />
      </City.Fieldset>
     ))}
    </City>
  )
}
