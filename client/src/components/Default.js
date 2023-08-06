import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './default.css'
import { Link } from 'react-router-dom';
import Home from '../pages/home';

const { Header, Sider, Content } = Layout;

const Default = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggle = () => {
    setCollapsed(!collapsed);
  }
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          {/* Using Link component for navigation */}
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/addpost" icon={<VideoCameraOutlined />}>
            <Link to="/addpost">Add Post</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to={`/profile/${user._id}`}>Profile</Link>
          </Menu.Item>
          <Menu.Item key="/allusers" icon={<UserOutlined />}>
            <Link to="/allusers">Allusers</Link>
          </Menu.Item>
          <Menu.Item icon={<LogoutOutlined />}>
            <Link onClick={() => { localStorage.removeItem(('user'), window.location.reload) }}>Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            backgroundImage: 'linear-gradient(rgb(29, 71, 123), rgb(6, 174, 65))',

          }}
          
        >
        <div className='d-flex justify-content-between bs1'>
          <h2>MR</h2>
          <h4>{JSON.parse(localStorage.getItem('user')).username}</h4>
        </div>
      </Header>
      <div className="blur" style={{top: '80%', right: '0' }}></div>
      <Content
        style={{
          

        }}
      >
        {props.children}
      </Content>
    </Layout>
    </Layout >
  );
};

export default Default;