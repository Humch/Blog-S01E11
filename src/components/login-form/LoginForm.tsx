import React, { useState } from 'react';

import { Box, Title } from '@the-sleeping-dog/react-components';

import UsernameField from 'components/username-field/UsernameField';
import SubmitButton from 'components/submit-button/SubmitButton';
import PasswordField from 'components/password-field/PasswordField';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    username.length && password.length && alert(`Your username is : ${username} \nYour password is : ${password}`);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Title size="is-3" useParagraph>
          Login Form
        </Title>
        <UsernameField username={username} handleChange={(e) => setUsername(e.target.value)} />
        <PasswordField password={password} handleChange={(e) => setPassword(e.target.value)} />
        <SubmitButton />
      </form>
    </Box>
  );
};

export default LoginForm;
