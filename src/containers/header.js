import React from 'react';
import { Header, Form } from '../components';

function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Title>Github Jobs</Header.Title>
      {children}
    </Header>
  )
}

export default HeaderContainer
