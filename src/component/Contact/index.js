import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [valid, setValid] = useState(false)

  const isEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleChange = event => {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
    if (name === 'email' && !isEmail(value)) {
      setErrorMessage('Email address is invalid')
      return
    }
    if (!value) {
      setErrorMessage(`Field ${name} is required`)
      return
    }
    setErrorMessage('')
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(form)
  }

  const validate = event => {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value
    }
    setValid(!!newForm.name && !!newForm.message && isEmail(newForm.email))
  }

  const { name, email, message } = form
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={validate} onBlur={handleChange} defaultValue={name} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" onChange={validate} onBlur={handleChange} defaultValue={email} />
        </div>
        <div>
          <label htmlFor="message"> Message:</label>
          <textarea name="message" rows="5" onChange={validate} onBlur={handleChange} defaultValue={message} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button disabled={!valid} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact