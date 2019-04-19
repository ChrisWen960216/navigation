import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import './NavCard.scss';

export default class NavCard extends React.Component {
  static propTypes = {
    title: PropTypes.any,
    list: PropTypes.array,
    onIconClick: PropTypes.func,
  }


  constructor(props) {
    super(props);
    this.state = {};
    this.onIconClick = this.onIconClick.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderNavLinks = this.renderNavLinks.bind(this);
  }

  onIconClick(title) {
    return this.props.onIconClick(title);
  }

  renderTitle() {
    const { title } = this.props;
    const titleEle = (
      <span className="NavCard_title">
        <Icon type="tag" className="tag_icon" onClick={() => this.onIconClick(title)} />
        <span>{title}</span>
      </span>
    );
    return titleEle;
  }

  renderNavLinks() {
    const { list } = this.props;
    const navLinks = list.map(item => (
      <div className="linkItem" key={item.url} onClick={() => window.location.href = `${item.url}`} role="presentation">
        <a href={item.url}>{item.text}</a>
        <div className="desc">{item.desc}</div>
      </div>
    ));
    return navLinks;
  }

  render() {
    const title = this.renderTitle();
    const content = this.renderNavLinks();
    return (
      <Card className="NavCard" title={title}>
        <div className="NavCard_content">
          {content}
        </div>
      </Card>
    );
  }
}

NavCard.defaultProps = {
  title: null,
  list: [],
  onIconClick: f => f,
};
