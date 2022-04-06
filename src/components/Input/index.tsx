import MuiInput from '@mui/material/TextField'
import React, { ChangeEvent } from 'react'

interface IInputProps {
  id?: string
  required?: boolean
  autoFocus?: boolean
  label?: string
  name?: string
  value?: any
  onChange:
    | ((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => any)
    | undefined
  endAdornment?: React.ReactNode
  type?: string
  error?: any
}

const Input: React.FC<IInputProps> = ({
  required,
  autoFocus,
  id,
  label,
  name,
  value,
  onChange,
  type,
  endAdornment,
  error,
}) => (
  <MuiInput
    id={id}
    name={name}
    required={required}
    autoFocus={autoFocus}
    fullWidth
    margin="normal"
    label={label}
    variant="standard"
    value={value}
    type={type}
    onChange={onChange}
    InputProps={{
      endAdornment: endAdornment === undefined ? undefined : endAdornment,
    }}
    {...(error && { error: true, helperText: error })}
  />
)

export default Input
