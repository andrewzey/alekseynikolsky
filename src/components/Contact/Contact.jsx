import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Flex, Box } from 'reflexbox';

import ContactForm from '../ContactForm/ContactForm';

const propTypes = {
  pathname: PropTypes.string
};

const Contact = ({ pathname }) => (
  <div>
    <DocumentTitle title='Aleksey Nikolsky - Contact'></DocumentTitle>
    <Flex wrap justify="center">
      <Box col={12} sm={12} lg={8} p={2}>
        <h3>Contact Aleksey</h3>
        <ContactForm />
      </Box>
    </Flex>
  </div>
);

Contact.propTypes = propTypes;

export default Contact;
