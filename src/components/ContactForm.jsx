import React from 'react';
import Button from './Button';
import styled from '@emotion/styled/macro';
import {BODY_TEXT_STYLE} from '../styles';

const StyledForm = styled.form({
  position: 'relative',
});

const commonInputStyles = {
  ...BODY_TEXT_STYLE,
  display: "block",
  backgroundColor: "#F1F1F1",
  width: "100%",
  fontSize: "16px", /* To disable input form zooming on mobile */
  lineHeight: "1.8em",
  padding: "0.5em",
  marginBottom: "0.625em",
  border: "1px solid #DDD",
  borderRadius: "0",

  boxSizing: "border-box",
  '&:required': {
    boxShadow: 'none',
  },
};

const StyledInput = styled.input({
  ...commonInputStyles,
});

const StyledTextArea = styled.textarea({
  ...commonInputStyles,
  minHeight: '200px',
});

export default class ContactForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://formspree.io/alekseynikolsky+webcontactform@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'json',
      },
      redirect: 'manual',
      body: new FormData(this.form),
    }).then(response => {
      if (response.status >= 400 && response.status < 600) {
        alert('There was a problem with the email server. Please try again later');
        throw new Error("Bad response from formspree server.");
      }
      alert('Your message was sent. Thank you!');
      this.form.reset();
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <StyledForm
        id="ContactForm"
        onSubmit={event => this.handleSubmit(event)}
        ref={ref => this.form = ref}
      >
        <StyledInput
          tabIndex={1} type="text" name="name" required
          placeholder="Your Name"
        />
        <StyledInput
          tabIndex={2} type="email" name="email" required
          placeholder="Your Email Address"
        />
        <StyledInput
          tabIndex={3} type="text" name="_subject" required
          placeholder="Your Subject Line"
        />
        <StyledTextArea
          tabIndex={4} name="message" required
          placeholder="Your Message"
        />
        {/*This input field is a honeypot to catch spam bots -->*/}
        <input
          tabIndex={5} type="text" name="_gotcha"
          style={{display: 'none'}}
        />
        <Button type="submit" value="Send" color="blue">Send</Button>
      </StyledForm>
    );
  }
}
