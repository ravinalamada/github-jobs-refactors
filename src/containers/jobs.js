import React, {useContext} from 'react';
import { Context } from '../context/globalContextProvider';
import { Jobs } from '../components';
import FeatureContainer from '../containers/feature';


// Mapped the jobs data from the API url
export default function JobsContainer({children, ...restProps}) {
  const {state, dispatch} = useContext(Context);
  const {loading, jobs} = state;

  // This will toggle the items
  function toggleItems() {
    dispatch({type:"TOGGLE_ITEMS"})
  }

  return (
    <Jobs>
      {!loading && jobs && jobs && (
          <>
            {
              jobs.map(job => (<FeatureContainer key={job.id} job={job} toggleItems={toggleItems}/>))
            }
          </>
        )
      }
    </Jobs>
  )
}
