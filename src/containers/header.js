import React from 'react';
import { Header } from '../components';

function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        {children}
      </Header.Frame>
    </Header>
  )
}

export default HeaderContainer
