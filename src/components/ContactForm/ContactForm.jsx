import React from 'react';

import './ContactForm.css';

const baseClass = 'ContactForm';

const ContactForm = () => {
  function handleSubmit(event) {
    const formDOMNode = document.getElementById(baseClass);
    event.preventDefault();
    fetch('https://formspree.io/alekseynikolsky+webcontactform@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'json',
      },
      redirect: 'manual',
      body: new FormData(formDOMNode),
    }).then(response => {
      if (response.status >= 400 && response.status < 600) {
        // TODO: handle error better
        alert('There was a problem with the email server. Please try again later');
        throw new Error("Bad response from formspree server.");
      }
      alert('Your message was sent. Thank you!');
      formDOMNode.reset();
    }).catch(error => {
      // TODO: handle error
      console.error(error);
    });
  }

  return (

    <form id={baseClass} className={baseClass} onSubmit={event => handleSubmit(event)}>
      <input
        tabIndex="1" type="text" name="name" required
        placeholder="Your Name"
      />
      <input
        tabIndex="2" type="email" name="email" required
        placeholder="Your Email Address"
      />
      <input
        tabIndex="3" type="text" name="_subject" required
        placeholder="Your Subject Line"
      />
      <textarea
        tabIndex="4" name="message" required
        placeholder="Your Message"
      />
      {/*This input field is a honeypot to catch spam bots -->*/}
      <input
        tabIndex="5" type="text" name="_gotcha"
        style={{ display: 'none' }}
      />
      <button type="submit" value="Send">Send</button>
    </form>
  );
}

export default ContactForm;