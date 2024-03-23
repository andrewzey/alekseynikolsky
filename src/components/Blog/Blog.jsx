import React from 'react';
import {Helmet} from 'react-helmet';
import {Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import Route from '../Route';
import {Heading2, Heading3, Par} from '../common';
import BlogRow from './BlogRow';
import BlogPosts from './BlogPosts.json';
import {MEDIA_QUERIES} from '../../styles';

function BlogListing() {
  return BlogPosts.map((post, index) => (
    <BlogRow
      key={index}
      {...post}
    />
  ));
}

function BlogPostFactory(post) {
  return class BlogPost extends React.Component {
    constructor(props) {
      super(props)

      this.state = {md: ""}
    }

    componentWillMount() {
      fetch(post.mdPath)
        .then((res) => res.text())
        .then((md) => {
          this.setState({md})
        })
    }

    render() {
      let {md} = this.state;

      return (
        <div>
          <Helmet>
            <title>Aleksey Nikolsky - Blog - {post.title}</title>
          </Helmet>
          <div style={{paddingTop: '1rem'}}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={md} components={{
              h1: styled(Heading2)({
                fontSize: '2rem',
                paddingTop: '1.5rem',
                textShadow:'0.5px 0 0 currentColor', // fake bold
                letterSpacing: 1,
                [MEDIA_QUERIES.breakpoints[1]]: {
                  fontSize: '1.5em',
                }
              }),
              h2: styled(Heading3)({paddingTop: '1.5rem'}),
              p: styled(Par)({paddingTop: '1rem'}),
              strong: styled('strong')({fontWeight: 'bold'}),
              em: styled('em')({fontStyle: 'italic'}),
            }} />
          </div>
        </div>
      )
    }
  }
}

export default function Blog(props) {
  const path = '/blog';
  const blogPostRoutes = BlogPosts.map(post => (
    <Route
      exact
      path={`${path}/${post.slug}`}
      component={BlogPostFactory(post)}
      key={post.slug}
    />
  ));

  return (
    <div>
      <Helmet>
        <title>Aleksey Nikolsky - Blog</title>
      </Helmet>
      <Switch>
        <Route
          exact
          path="/blog"
          component={BlogListing}
        />
        {blogPostRoutes}
      </Switch>
    </div>
  );
};
Blog.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};;
