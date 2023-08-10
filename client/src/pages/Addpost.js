import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Input, Button } from 'antd';
import Default from '../components/Default';
import { addPost } from '../redux/actions/postAction';
import './Addpost.css'

const { TextArea } = Input;

function AddPost() {
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  // Function to open the camera and start the video stream
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  // Function to stop the video stream and close the camera
  const closeCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleCapture = () => {
    const video = videoRef.current;

    // Check if the video element is ready
    if (video && video.readyState === video.HAVE_ENOUGH_DATA) {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas image data to a data URL
      const imageDataURL = canvas.toDataURL('image/jpeg');

      // Set the captured image as the preview
      setImage(imageDataURL);

      // Close the camera after capturing the image
      closeCamera();
    }
  };

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
            <div className='camera-container'>
              <video ref={videoRef} autoPlay playsInline />
              {image !== '' && <img src={image} height='200' width='200' alt='Preview' />}
            </div>
            <Button onClick={handleCapture}>Take Photo</Button>
            <Button onClick={openCamera}>Open Camera</Button>
            <Button onClick={closeCamera}>Close Camera</Button>
            <br />
<<<<<<< HEAD
            <Form.Item name='image' label='Image' rules={image ? [] : [{required: true}]}>

          
                      <input
=======
          
            <Form.Item name='image' label='Image' rules={[{required: true}]}>
            <input
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
                id='fileInput'
                type='file'
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileInput}
              /></Form.Item>
            
                                  
              {/* The label will trigger the file input when clicked */}
              <label htmlFor='fileInput'>
                Choose Image
              </label>
              <input
                id='fileInput'
                type='file'
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileInput}
              />
              <div className="text-left mt-3">
                            <Button type="primary" htmlType='submit'>Post</Button>
                            </div>
           
          </Form>
        </Col>
      </Row>
    </Default>
  );
}

export default AddPost;
