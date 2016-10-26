import React from 'react';
import DocumentTitle from 'react-document-title';

const ComingSoon = () => {
  return (
    <div style={{
      'textAlign': 'center',
      'fontSize': '1.5rem',
      'paddingTop': '2rem',
      'paddingBottom': '2rem',
    }}>
      <DocumentTitle title='Aleksey Nikolsky - This page is coming soon!' />
      <p>This page is under development.</p>
      <br />
      <p>Check back soon!</p>
    </div>
  );
};

export default ComingSoon;