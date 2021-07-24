import React from 'react';

import LoginForm from 'components/login-form/LoginForm';

import Style from './App.module.scss';
import { Container } from '@the-sleeping-dog/react-components';

function App() {
  return (
    <main className={Style.app}>
      <Container className={Style.container}>
        <LoginForm />
      </Container>
    </main>
  );
}

export default App;
