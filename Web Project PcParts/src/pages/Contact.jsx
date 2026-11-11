import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="container page-section">
      <div className="contact-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Let's talk<br /><span>PC parts.</span></h1>
        <p className="muted">Have a question about the website or a computer component? Send us a message.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div><strong>Email</strong><p>hello@pcparts.example</p></div>
          <div><strong>Location</strong><p>Lebanon</p></div>
          <p className="small-note">This form is a frontend demonstration. It does not send an email.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input name="name" value={form.name} onChange={handleChange}
              placeholder="Your name" required />
          </label>

          <label>
            Email address
            <input type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea name="message" value={form.message} onChange={handleChange}
              rows="5" placeholder="Write your message..." required />
          </label>

          <button className="btn btn-primary" type="submit">Send message</button>
          {sent && <p className="success-message">Thank you! Your demo message has been submitted.</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
