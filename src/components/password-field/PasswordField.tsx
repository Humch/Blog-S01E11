import React, { ChangeEventHandler, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { InputField } from '@the-sleeping-dog/react-components';

export interface PasswordFieldProps {
  password: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ password, handleChange }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const rightIcon = hidePassword ? faEye : faEyeSlash;

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  const icons = {
    rightIcon: <FontAwesomeIcon icon={rightIcon} className="has-text-info" />,
    handleRightIconClick: toggleHidePassword,
  };

  const fiedType = hidePassword ? 'password' : 'text';

  return (
    <InputField
      name="username"
      label="Username"
      inputProps={{ value: password, onChange: handleChange, type: fiedType }}
      icons={icons}
    />
  );
};

export default PasswordField;
