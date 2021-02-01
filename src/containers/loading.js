import React from 'react';
import { Loading } from '../components';

// This will display the loading context while the data is loading
function LoadingContainer() {
  return (
      <Loading>
        <Loading.Wrapper>
          <Loading.Text>Loading</Loading.Text>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </Loading.Wrapper>
      </Loading>
  )
}

export default LoadingContainer;
