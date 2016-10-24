import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import './TruncatedText.css';

const { string, bool, number, func, array, oneOfType } = React.PropTypes;

/**
 * Truncate text.
 * @private
 *
 * @param {string} text - Text to truncate.
 * @param {number} length - Length at which to truncate `text`.
 *
 * @returns {string} Truncated string.
 */
function truncate(text = '', length = 0) {
  if (!text || text.length <= length) {
    return text;
  }

  return text.slice(0, length).concat('...');
};

const baseClass = 'truncated-text';

const propTypes = {
  className: oneOfType([string, array]),
  expandable: bool,
  length: number.isRequired,
  lessLinkText: string,
  moreLinkText: string,
  onClickMoreLink: func,
  onClickLessLink: func,
  text: string.isRequired,
  title: string,
  titleSeparator: string,
  preventDefaultOnExpand: bool,
};

const defaultProps = {
  expandable: false,
  length: 0,
  lessLinkText: 'less',
  moreLinkText: 'more',
  onClickMoreLink: () => {},
  onClickLessLink: () => {},
  title: '',
  titleSeparator: ' - ',
  preventDefaultOnExpand: false,
};

/**
 * Truncated text component.
 * @class
 */
class TruncatedText extends React.Component {
  /**
   * Constructor.
   * @constructor
   *
   * @param {object} [props] - Props.
   */
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.onClickTextLink = this.onClickTextLink.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', this.updateHeight.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight.bind(this));
  }

  /**
   *  Update height of wrapper to fit new text.
   */
  updateHeight() {
    const wrapper = ReactDOM.findDOMNode(this.transitionGroup);
    // Mutate the DOM on the next tick, so we can pick up mounted/unmounting
    // React nodes.
    if (wrapper) {
      // If there's no height set already, we can't transition. Set one.
      if (!wrapper.style.height) {
        wrapper.style.height = `${wrapper.clientHeight}px`;
      }
      setTimeout(() => {
        // Get the height of the DOM node that is entering.
        const entering = ReactDOM.findDOMNode(this.textBody);
        const height = entering.offsetHeight;

        // Set the height of the wrapper to the entering DOM node.
        wrapper.style.height = `${height}px`;
      }, 0);
    }
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  /**
   * Handle clicking the 'more'/'less' link.
   */
  onClickTextLink(event) {
    if (this.props.preventDefaultOnExpand) {
      event.preventDefault();
    }
    if (this.state.expanded) {
      this.props.onClickLessLink(this.props.text);
    } else {
      this.props.onClickMoreLink(this.props.text);
    }

    // Don't do anything else if expandable is not true.
    if (!this.props.expandable) {
      return;
    }

    this.setState({ expanded: !this.state.expanded });
    this.updateHeight();
  }

  /**
   * Render the more text link.
   *
   * @returns {ReactElement}
   */
  renderMoreLink() {
    const text = this.props.expandable
      ? this.state.expanded ? this.props.lessLinkText : this.props.moreLinkText
      : this.props.moreLinkText;

    return (
      <a
        className={`${TruncatedText.baseClass}__more-link`}
        onClick={this.onClickTextLink} key="more-link"
      >
        {text}
      </a>
    );
  }

  isTruncateable() {
    if (this.props.title) {
      const combinedText = `${this.props.title}${this.props.titleSeparator}${this.props.text}`;
      const truncated = truncate(combinedText, this.props.length);
      return truncated !== combinedText;
    }
    const truncated = truncate(this.props.text, this.props.length);
    return truncated !== this.props.text;
  }

  renderTextWithTitle() {
    const titleCls = `${TruncatedText.baseClass}__text--title`;
    const bodyCls = `${TruncatedText.baseClass}__text--body`;

    const combinedText = `${this.props.title}${this.props.titleSeparator}${this.props.text}`;
    const truncated = truncate(combinedText, this.props.length);

    const titleSegment = combinedText.slice(0, this.props.title.length);
    const textSegment = combinedText.slice(this.props.title.length, combinedText.length);

    const truncatedTitleSegment = truncated.slice(0, this.props.title.length);
    const truncatedTextSegment = truncated.slice(this.props.title.length, truncated.length);

    const truncatedEls = [
      <span className={titleCls} key="title">{truncatedTitleSegment}</span>,
      <span className={bodyCls} key="body">{truncatedTextSegment}</span>
    ];
    const expandedEls = [
      <span className={titleCls} key="title">{titleSegment}</span>,
      <span className={bodyCls} key="body">{textSegment}</span>
    ];

    return {
      'fullTextElement': expandedEls,
      'text': this.state.expanded ? combinedText : truncated,
      'element': this.state.expanded ? expandedEls : truncatedEls
    };
  }

  renderTextNoTitle() {
    const truncated = truncate(this.props.text, this.props.length);
    const expandableText = this.state.expanded ? this.props.text : truncated;

    return {
      'fullTextElement': this.props.text,
      'text': expandableText,
      'element': expandableText
    };
  }

  /**
   * Render the truncated text.
   *
   * @returns {ReactElement}
   */
  renderText() {
    const cls = `${TruncatedText.baseClass}__text`;
    const textObj = this.props.title ? this.renderTextWithTitle() : this.renderTextNoTitle();
    // Show full text
    if (!this.props.expandable) {
      return <span className={cls} key="non-expandable">{textObj.fullTextElement}</span>;
    }
    // Show expandable text
    const moreLink = this.isTruncateable()
      ? this.renderMoreLink()
      : null;
    return (
      <ReactCSSTransitionGroup
        ref={component => this.transitionGroup = component}
        className={cls}
        transitionName={cls}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        key="transition-group"
      >
        <span ref={component => this.textBody = component} key={textObj.text.length}>
          {textObj.element} {moreLink}
        </span>
      </ReactCSSTransitionGroup>
    );
  }

  /**
   * Render.
   *
   * @returns {ReactElement}
   */
  render() {
    const cls = classnames(TruncatedText.baseClass, this.props.className);
    return (
      <p className={cls}>
        {this.renderText()}
      </p>
    );
  }
}

TruncatedText.baseClass = baseClass;
TruncatedText.propTypes = propTypes;
TruncatedText.defaultProps = defaultProps;

export default TruncatedText;