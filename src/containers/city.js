import React, {useState, useContext} from 'react';
import { City } from '../components';
import { cityData } from '../fixtures/cityData';
import {context } from '../context/globalContextProvider';

export default function CityContainer() {
  const [cities, setCities] = useState(cityData);

  function searchCity() {

  }

  return (
    <City>
     <City.Fieldset>
       <City.Text htmlFor="london">London</City.Text>
       <City.Input type="checkbox" id="london"/>
     </City.Fieldset>
     <City.Fieldset>
       <City.Text htmlFor="amesterdam">Ameterdam</City.Text>
       <City.Input type="checkbox" id="amesterdam" />
     </City.Fieldset>
     <City.Fieldset>
       <City.Text htmlFor="new-york">New York</City.Text>
       <City.Input type="checkbox" id="new-york" />
     </City.Fieldset>
     <City.Fieldset>
       <City.Text htmlFor="berlin">Berlin</City.Text>
       <City.Input type="checkbox" id="berlin" />
     </City.Fieldset>
    </City>
  )
}
