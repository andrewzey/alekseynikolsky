import React from 'react';
import {Helmet} from 'react-helmet';
import { Flex, Box } from 'rebass';

import ContactForm from './ContactForm';
import {Heading3} from './common';

const Contact = () => (
  <div>
    <Helmet>
      <title>Aleksey Nikolsky - Contact</title>
    </Helmet>
    <Flex flexWrap="wrap" justifyContent="center">
      <Box width={[12/12, 12/12, 8/12]} padding={2}>
        <Heading3>Contact Aleksey</Heading3>
        <ContactForm />
      </Box>
    </Flex>
  </div>
);

export default Contact;
