import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import './Header.scss';

class Header extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    onSearch: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    const { form: { validateFields }, onSearch } = this.props;
    return validateFields((error, values) => {
      if (!error) { return onSearch(values); }
      return null;
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <header id="nav_header">
        <div className="static_logo" />
        <Form layout="inline" onSubmit={this.onSearch}>
          <Form.Item>
            {getFieldDecorator('address')(<Input autoFocus />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" style={{ marginRight: '15px' }}>搜索</Button>
          </Form.Item>
        </Form>
      </header>
    );
  }
}

Header.defaultProps = {
  onSearch: f => f,
};

export default Form.create()(Header);
