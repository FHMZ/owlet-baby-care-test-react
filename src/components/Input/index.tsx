import MuiInput from '@mui/material/TextField'
import React, { ChangeEvent } from 'react'

type Sizes = 'small' | 'medium'

interface IInputProps {
  id?: string
  required?: boolean
  autoFocus?: boolean
  disabled?: boolean
  label: string
  name: string
  type?: string
  autoComplete?: string
  className?: string
  value: any
  color: any
  onChange:
    | ((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => any)
    | undefined
  size?: Sizes
  variant: any
  endAdornment?: React.ReactNode
  error?: any
  children?: React.ReactNode
}

const Input: React.FC<IInputProps> = ({
  required,
  autoFocus,
  disabled,
  id,
  label,
  name,
  type,
  variant,
  autoComplete,
  className,
  value,
  color,
  onChange,
  size,
  endAdornment,
  error,
}) => {
  return (
    <MuiInput
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      autoFocus={autoFocus}
      fullWidth
      margin="normal"
      label={label}
      type={type}
      variant={variant}
      autoComplete={autoComplete}
      className={className}
      value={value}
      color={color}
      size={size}
      onChange={onChange}
      InputProps={{
        endAdornment: endAdornment === undefined ? undefined : endAdornment,
      }}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default Input
