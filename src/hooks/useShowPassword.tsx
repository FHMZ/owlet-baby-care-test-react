import { useState } from 'react'

export const useShowPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const onPasswordVisible = () => setIsPasswordVisible(!isPasswordVisible)
  return { isPasswordVisible, onPasswordVisible }
}
