import { useState } from 'react'

const CHECKBOX_KEY = 'checkbox'

export const useValidateForm = (initialForm: any) => {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState(initialForm)

  const onChange = (e: any) => {
    const isCheckbox = e.target.type === CHECKBOX_KEY
    const value = isCheckbox ? e.target.checked : e.target.value
    setForm({ ...form, [e.target.name]: value })
  }

  return {
    form,
    setForm,
    error,
    setError,
    onChange,
  }
}
