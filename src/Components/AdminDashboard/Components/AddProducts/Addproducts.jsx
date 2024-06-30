import React, { useState } from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import "./Addproducts.css";

const Addproducts = () => {
  const options = ["Books", "SourceCodes", "Arts & Drawings"];
  const handleSubmitForm = (vals) => {
    console.log(vals);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: '..',
    onChange: handleChange,
    multiple: true,
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
        <Form.Item className="label" label="Product File"></Form.Item>
        <Form.Item name="files">
          <Input block placeholder="Enter your email address" required></Input>
        </Form.Item>
        <Form.Item className="label" label="Product Image"></Form.Item>
        <Form.Item name="image">
        <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
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
