import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import Default from '../components/Default';
import { addPost } from '../redux/actions/postAction';
import './Addpost.css'

const { TextArea } = Input;

function AddPost() {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = (values) => {
    values.image = image;
    dispatch(addPost(values));
  };

  return (
    <Default>
      <Row justify='center'>
        <Col lg={12}>
          <Form className='bs1 p-3 mt-5' layout='vertical' onFinish={handleSubmit}>
            <h3>Add new post</h3>
            <Form.Item name='description' label='Description' rules={[{ required: true }]}>
              <TextArea />
            </Form.Item>
            <Form.Item name='image' label='Image' rules={[{ required: true }]}>
              <Input type='file' onChange={handleFileInput} />
            </Form.Item>
            {image !== '' && <img src={image} height='200' width='200' alt='Preview' />}
            <br />
            <div className='text-left mt-3'>
              <Button type='primary' htmlType='submit'>
                Post
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Default>
  );
}

export default AddPost;
