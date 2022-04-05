import { useState } from 'react'

export const useValidateForm = (initialForm: any) => {
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState(initialForm)

  function onFormChange(e: any) {
    const value = e.target.value
    setForm({ ...form, [e.target.name]: value })
  }

  return {
    form,
    setForm,
    error,
    setError,
    onFormChange,
  }
}
