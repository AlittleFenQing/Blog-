import React from 'react';
import '../static/style/components/header.css';
import { Row, Col, Menu, Icon } from 'antd';

const Header = () => (
  <div className="header">
    <Row type='flex' justify='center'>
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className='header-logo'>王雪</span>
        <span className='header-txt'>前端开发经验积累</span>
      </Col>
      <Col xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode='horizontal'>
          <Menu.Item>
            <Icon type='home' theme="twoTone" twoToneColor="#eb2f96" />
            首页
          </Menu.Item>
          <Menu.Item>
            <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
            知识梳理
          </Menu.Item>
          <Menu.Item>
            <Icon type='smile' theme="twoTone" twoToneColor="#eb2f96" />
            闲言碎语
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header
