import React, { useEffect, useState } from "react";
import { Button, Col, Row, Input } from 'antd';

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Default from "../components/Default";
import "./AllUsers.css";
import { followUser, getAllUsers, unfollowUser } from "../redux/actions/userActions";

import {
    UserAddOutlined,
    CheckOutlined,
  } from '@ant-design/icons';
const { TextArea } = Input;

function AllUsers() {
    const { users } = useSelector(state => state.usersReducer);
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const [search, setSearch] = useState('');
    const { loading } = useSelector(state => state.alertsReducer);
  
    const dispatch = useDispatch();
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [loading]);

    useEffect(() => {
        if (search) {
            const filteredUsers = users.filter(obj => obj.username.toLowerCase().includes(search.toLowerCase()));
            setFilteredUsers(filteredUsers);
        } else {
            setFilteredUsers([]);
        }
    }, [search, users]);

    return (
        <Default>
            <div>
                <Row justify={'center'}>
                    <Col lg={20} className='d-flex mt-3'>
                        <Input style={{ width: '100%' }} value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Col>
                </Row>
                {search && ( // Render AllUsers only when search has at least one character
                    <Row justify='center' gutter={16} className="mt-3 text-center">
                        {filteredUsers.map(user => {
                            return <>
                                {currentUser._id !== user._id && (
                                    <Col lg={10} xs={24} className="text-left">
                                        <div className='bs1 p-2 mt-4 ' style={{backgroundColor: 'white'}}>
                                            {user.profilePicUrl == "" ? (
                                                <p className="profilepic2 d-flex align-items-center">
                                                    {user.username[0]}
                                                </p>
                                            ) : (
                                                <img src={user.profilePicUrl} height='60' width='60' />
                                            )}
                                            <Link to={`/profile/${user._id}`}>{user.username}</Link>
                                            {user.followers.find((obj) => obj === currentUser._id) ? (
                                                <div className="d-flex m-2">
                                                    <Button icon={<CheckOutlined />}>Following</Button>
                                                    <Button
                                                    className="ml-3" onClick={() => { dispatch(unfollowUser({ currentUserId: currentUser._id, receiverUserId: user._id })) }} >Unfollow</Button>

                                                </div>
                                            ) : (
                                                <div className="d-flex m-2">
                                                <Button 
                                                icon={<UserAddOutlined />}onClick={() => { dispatch(followUser({ currentUserId: currentUser._id, receiverUserId: user._id })) }}>Follow</Button>
                                                </div>

                                            )}

                                        </div>
                                    </Col>
                                )}
                            </>
                        })}
                    </Row>
                )}
            </div>
        </Default>
    )
}

export default AllUsers;
