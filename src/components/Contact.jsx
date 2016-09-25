import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  pathname: PropTypes.string
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      _subject: '',
      message: '',
      _gotcha: '',
    };
  }

  handleChange(event, formFieldName) {
    this.setState({[formFieldName]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://formspree.io/alekseynikolsky+webcontactform@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'json',
      },
      redirect: 'manual',
      body: JSON.stringify(this.state),
    }).then(response => {
      alert('Your message was sent. Thank you!');
      this.setState({name: '', email: '', _subject: '', message: ''});
    }).catch(error => {
      // TODO: handle error
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <DocumentTitle title='Aleksey Nikolsky - Contact'></DocumentTitle>
          <div><h2>Contact</h2></div>
          <form id="contact-form" onSubmit={event => this.handleSubmit(event)}>
            <input
              tabIndex="1" type="text" name="name" required
              placeholder="Your Name"
              value={this.state.name}
              onChange={event => {this.handleChange(event, 'name')}}
            />
            <input
              tabIndex="2" type="email" name="email" required
              placeholder="Your Email Address"
              value={this.state.email}
              onChange={event => {this.handleChange(event, 'email')}}
            />
            <input
              tabIndex="3" type="text" name="_subject" required
              placeholder="Your Subject Line"
              value={this.state._subject}
              onChange={event => {this.handleChange(event, '_subject')}}
            />
            <textarea
              tabIndex="4" name="message" required
              placeholder="Your Message"
              value={this.state.message}
              onChange={event => {this.handleChange(event, 'message')}}
            />
            {/*This input field is a honeypot to catch spam bots -->*/}
            <input
              tabIndex="5" type="text" name="_gotcha"
              style={{ display: 'none' }}
              value={this.state._gotcha}
              onChange={event => {this.handleChange(event, '_gotcha')}}
            />
            <button type="submit" value="Send">Send</button>
          </form>
      </div>
    );
  }
}

Contact.propTypes = propTypes;

export default Contact;
