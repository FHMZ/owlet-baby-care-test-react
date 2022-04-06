import React, { FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../../../../components/Input'
import { useShowPassword } from '../../../../hooks/useShowPassword'
import { useValidateForm } from '../../../../hooks/useValidateForm'
import { ILogin } from '../../../../models/login'
// import { useLoginProvider } from '../../../../providers/KdsProvider'
import PasswordIconButton from '../IconButton'
import { StyledForm, StyledLoginButton } from './styles'

const initForm: ILogin = {
  userName: '',
  userPassword: '',
}

const LoginForm: React.FC = () => {
  const { form, error, setError, onFormChange } = useValidateForm(initForm)
  const { isPasswordVisible, onPasswordVisible } = useShowPassword()
  // const { setKdsProps } = useLoginProvider()

  const history = useHistory()
  const isFieldText = isPasswordVisible ? 'text' : 'password'

  function handleValidateForm() {
    let fields = { userName: '', userPassword: '' }
    fields.userName = form.userName ? '' : 'User field can not be empty.'
    fields.userPassword = form.userPassword
      ? ''
      : 'Password field can not be empty.'
    setError({ ...fields })
    return Object.values(fields).every((ex) => ex === '')
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (handleValidateForm()) {
      const response = require('../../../../assets/mocks/login.json')
      if (response) {
        if (
          response.userName === form.userName &&
          response.userPassword === form.userPassword
        ) {
          history.push('/home')
        } else {
          alert('Could not found the username or password key')
        }
      }
    }
  }

  return (
    <StyledForm id="form-login" onSubmit={handleSubmit}>
      <Input
        id="username"
        label="Email"
        name="userName"
        required={true}
        autoFocus={true}
        value={form.userName}
        onChange={onFormChange}
        error={error.userName}
      />
      <Input
        id="password"
        label="Password"
        name="userPassword"
        required={true}
        type={isFieldText}
        value={form.userPassword}
        onChange={onFormChange}
        endAdornment={
          <PasswordIconButton
            onClick={onPasswordVisible}
            isVisible={isPasswordVisible}
          />
        }
        error={error.userPassword}
      />
      <StyledLoginButton
        color="primary"
        fullWidth={true}
        variant="contained"
        onClick={handleSubmit}
      >
        Login
      </StyledLoginButton>
    </StyledForm>
  )
}

export default LoginForm
