import React, {useContext} from 'react';
import {Context} from '../context/GlobalContextProvider';
import { Loanding } from '../components';

// This will display the loading context while the data is loading
function LoadingContainer() {
  const {state} = useContext(Context);
  const {loading} = state

  return (
      <Loanding>
        {loading &&
            <Loanding.Wrapper>
            <Loanding.Text>Loading</Loanding.Text>
            <div className="lds-ellipsis"><div></div><div></div><div></div></div>
          </Loanding.Wrapper>
        }
      </Loanding>
  )
}

export default LoadingContainer;
