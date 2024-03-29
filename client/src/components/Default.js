import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {

  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  FileSearchOutlined,
  CheckOutlined,
  UserAddOutlined,
  SearchOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Col, Input } from 'antd';
import './default.css'
import { Link } from 'react-router-dom';
import { followUser, getAllUsers, unfollowUser } from "../redux/actions/userActions";
import Home from '../pages/home';
const { TextArea } = Input

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
  const [search, setSearch] = useState('')
  const { users } = useSelector(state => state.usersReducer);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { followLoading, unfollowLoading } = useSelector(state => state.alertsReducer);
  const { loading } = useSelector(state => state.alertsReducer);
  const [searchPerformed, setSearchPerformed] = useState(false);
  

  const dispatch = useDispatch();

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    if (searchPerformed) {
      dispatch(getAllUsers()); 
    }
  }, [searchPerformed, loading]);
  const handleSearch = () => {
    setSearchPerformed(true);
  };
  const resetSearch = () => {
    setSearchPerformed(false);
    setSearch('');
  };



  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}

          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            left: 0,
            padding: 0,
          }}
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
          <Menu.Item icon={<LogoutOutlined />}>
            <Link onClick={() => { localStorage.removeItem(('user'), window.location.reload) }}>Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            width: '100%',
            position: 'sticky',
            top: 0,
            left: 0,
            zIndex: 2,
            boxShadow: '0 0 10px #ddd',
            backgroundImage: 'linear-gradient(rgb(29, 71, 123), rgb(6, 174, 65))',

          }}

        >
          <div className='d-flex justify-content-between bs2 w-150'>
            <h2>MR_Media</h2>
            <Row justify={'center'}>
              <Col lg={30} className='d-flex mt-3'>
                <Input style={{ width: '100%', color:'gray'}} value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder='Search your friend here...'/>
                <Button onClick={handleSearch} className='ml-1' ><SearchOutlined className='justyfy-content-center align-item-center'/></Button>
                <Button onClick={resetSearch}className= 'ml-1'><ReloadOutlined className='justyfy-content-center align-item-center'/></Button> {/* Button to reset the search */}
              </Col>
            </Row>
            <h4>{JSON.parse(localStorage.getItem('user')).username}</h4>
          </div>
        </Header>
        <Content
          style={{


          }}
        >

          <div classname='search'>
            {searchPerformed && ( 
              <Row justify='center' gutter={10} className="mt-3 text-center">
                {
                  users.filter(obj => obj.username.toLowerCase().includes(search.toLowerCase())).map(user => {
                    return <>
                      {currentUser._id !== user._id && (
                        <Col lg={10} xs={24} className="text-left">
                          <div className='bs1 p-2 mt-4 ' style={{ backgroundImage: 'linear-gradient(rgba(138, 167, 202, 0.436), rgb(199, 81, 81))' }}>
                            {user.profilePicUrl == "" ? (
                              <p className="profilepic2 d-flex align-items-center color-white">
                                {user.username[0]}
                              </p>
                            ) : (
                              <img src={user.profilePicUrl} height='60' width='60' />
                            )}
                            <Link to={`/profile/${user._id}`}>{user.username}</Link>
                            {user.followers.find((obj) => obj == currentUser._id) ? (
                              <div className="d-flex m-2">
                                <Button icon={<CheckOutlined />}>Following</Button>
                                <Button
                                  className="ml-3" onClick={() => { dispatch(unfollowUser({ currentUserId: currentUser._id, receiverUserId: user._id })) }} >Unfollow</Button>

                              </div>
                            ) : (
                              <div className="d-flex m-2">
                                <Button
                                  icon={<UserAddOutlined />} onClick={() => { dispatch(followUser({ currentUserId: currentUser._id, receiverUserId: user._id })) }}>Follow</Button>
                              </div>

                            )}

                          </div>
                        </Col>
                      )}
                    </>
                  })
                }
              </Row>
            )}
          </div>
          {props.children}

        </Content >
      </Layout >
    </Layout >
  );
};

export default Default;
