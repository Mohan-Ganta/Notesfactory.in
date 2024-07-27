import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import "./Addproducts.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Addproducts = () => {
  const [imagefile, setImageFile] = useState();
  const [imagefileurl,setimagefileurl] = useState()
  const [fileurl,setfileurl] = useState()
    const [uploadText,setUploadText] = useState("Upload")
    const [file, setFile] = useState();
  const handleSubmitForm = async(vals) => {
    console.log(vals);
    const url = `http://localhost:5000/products/addProducts`
    await axios.post(url,vals)
    .then(res=>toast.success("Product added successfully",{position:"top-center"}))
    .catch(err=>toast.error("Error"))
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
  const handleFileUpload = async() => {
    console.log(file);
    if(!file)
      return 
    setUploadText("Uploading .")
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Notesfactory");
      try {
      setUploadText("Uploading ...")
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dll4lophp/image/upload",
          formData
        );
      setUploadText("Uploading .....")
      console.log(response.data.secure_url)
        setfileurl(response.data.secure_url);
        toast.success("File uploaded successfully",{position:"top-center"})
        setUploadText("Uploaded")
      } catch (error) {
        console.error("Error uploading image:", error);
      }
  };

  const handleImageUpload =async () => {
    console.log(imagefile);
    if(!imagefile) return 
    setUploadText("Uploading .")
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Notesfactory");
      try {
      setUploadText("Uploading ...")
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dll4lophp/image/upload",
          formData
        );
      setUploadText("Uploading .....")
      console.log(response.data.secure_url)
        setimagefileurl(response.data.secure_url);
        toast.success("File uploaded successfully",{position:"top-center"})
        setUploadText("Uploaded")
      } catch (error) {
        console.error("Error uploading image:", error);
      }
  };

  return (
    <div className="upload-single-product">
      <ToastContainer />
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
        <Form.Item name="file">
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
