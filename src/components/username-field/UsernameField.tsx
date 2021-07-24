import React, { ChangeEventHandler } from 'react';

import { InputField } from '@the-sleeping-dog/react-components';

export interface UsernameFieldProps {
  username: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const UsernameField: React.FC<UsernameFieldProps> = ({ username, handleChange }) => {
  return (
    <InputField
      name="username"
      label="Username"
      inputProps={{ value: username, onChange: handleChange }}
    />
  );
};

export default UsernameField;
