
import { useState } from "react";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";

function RideSearch() {
  const [pickupLocation, setPickupLocation] = useState();
  const [dropLocation, setDropLocation] = useState();
  const [currentDate, setCurrentDate] = useState();
  const [number, setNumber] = useState();


  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The location you entered was: ${(pickupLocation, dropLocation)}`);
  };
  const handleSeatNumber=(event)=>{
    if(event.target.value > 4){
      return
    }
    else{
      setNumber(event.target.value)
    }
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    // business logic 


  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return( 
  
    // <form className="search-form" onSubmit={handleSubmit}>
    //   <label>
    //     Select Pickup location:
    //     <span>
    //     <select
    //       id="location"
    //       name=" select pickup location"
    //       value={pickupLocation}
    //       onChange={(e) => setPickupLocation(e.target.value)}
    //     >
    //       <option value="Yamunanagar">Yamunanagar</option>
    //       <option value="Chandigarh">Chandigarh</option>
    //       <option value="Ambala">Ambala</option>
    //       <option value="Zirakpur">Zirakpur</option>
    //     </select>
    //     </span>
    //   </label>
    //   <div>
    //   <label>
    //     Select Drop Location:
    //     <span>
    //     <select
    //       id="location"
    //       name="select drop location"
    //       value={dropLocation}
    //       onChange={(e) => setDropLocation(e.target.value)}
    //     >
    //       <option value="Zirakpur">Zirakpur</option>
    //       <option value="Ambala">Ambala</option>
    //       <option value="Chandigarh">Chandigarh</option>
    //       <option value="Yamunanagar">Yamunanagar</option>
    //     </select>
    //     </span>
    //   </label>
    //   </div>
    //   <div>
    //   <label>
    //     Enter Current Date:
    //     <span>
    //     <input
    //       type="date"
    //       value={currentDate}
    //       onChange={(e) => setCurrentDate(e.target.value)}
    //     />
    //     </span>
    //   </label>
    //   </div>
    //   <div>
    //   <label>
    //     Enter No. of seats:
    //     <span>
    //     <input
    //       type="number"
    //       min="1"
    //       max="4"
    //       value={number}
    //       onChange={(e) => handleSeatNumber(e)}
    //     />
    //     </span>
    //   </label>
    //   </div>
    //   <div><button type="submit">Search</button></div>

    // </form>

<>

<Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

</>
  )
};


export default RideSearch;


