import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import "./Addproducts.css";

const Addproducts = () => {
  const [imagefile, setImageFile] = useState();
  const [file, setFile] = useState();
  const handleSubmitForm = (vals) => {
    console.log(vals);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };
  const handleFileUpload = () => {
    console.log(file);
  };

  const handleImageUpload = () => {
    console.log(imagefile);
  };
  return (
    <div className="upload-single-product">
      <h1>Add Products</h1>
      <Form onFinish={handleSubmitForm}>
        <Form.Item className="label" label="Product Category"></Form.Item>
        <Form.Item name="category">
          <Select
            showSearch
            placeholder="Select a Category"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={[
              {
                value: "Books",
                label: "Books",
              },
              {
                value: "Source Code",
                label: "Source Code",
              },
              {
                value: "Arts & Drawings",
                label: "Arts & Drawings",
              },
            ]}
          />
        </Form.Item>

        <Form.Item className="label" label="Product Name"></Form.Item>
        <Form.Item name="name">
          <Input block placeholder="Enter your email address" required></Input>
        </Form.Item>
        <Form.Item className="label" label="Product Description"></Form.Item>
        <Form.Item name="description">
          <Input block placeholder="Enter your email address" required></Input>
        </Form.Item>
        <Form.Item className="label" label="Product Cost"></Form.Item>
        <Form.Item name="cost">
          <Input block placeholder="Enter your email address" required></Input>
        </Form.Item>
        <Form.Item className="label" label="Product Image"></Form.Item>
        <Form.Item name="files">
          <Input type="file" onChange={handleImageChange}></Input>
          <button onClick={handleFileUpload}>Upload</button>
        </Form.Item>
        <Form.Item className="label" label="Product File"></Form.Item>
        <Form.Item name="image">
          <Input type="file" onChange={handleFileChange} accept="*/image"></Input>
          <button onClick={handleImageUpload}>Upload</button>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addproducts;
