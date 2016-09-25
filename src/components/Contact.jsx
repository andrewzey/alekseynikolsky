import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

const propTypes = {
  pathname: PropTypes.string
};

class Contact extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log('submitted!');
  }

  render() {
    return (
      <div>
        <DocumentTitle title='Aleksey Nikolsky - Contact'></DocumentTitle>
          <div><h2>Contact</h2></div>
          <form id="email-form" onSubmit={this.handleSubmit}>
            <input tabIndex="1" type="text" name="name" placeholder="Your Name" required />
            <input tabIndex="2" type="email" name="email" placeholder="Your Email Address" required />
            <input tabIndex="3" type="text" name="_subject" placeholder="Your Subject Line" required/>
            <textarea tabIndex="4" name="message" placeholder="Your Message" required />
            {/*This input field is a honeypot to catch spam bots -->*/}
            <input tabIndex="5" type="text" name="_gotcha" style={{ display: 'none' }} />
            <button type="submit" value="Send" >Send</button>
          </form>
      </div>
    );
  }
}

Contact.propTypes = propTypes;

export default Contact;
