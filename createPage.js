import React, { useState, useEffect } from "react";
import QuillEditor from "../../libs/QuillEditor";
import Header from "../../libs/Header/Header";
import { DownOutlined } from "@ant-design/icons";
import { Typography, Input, Select, Divider, Button, Checkbox } from "antd";
import "react-quill/dist/quill.snow.css";
import "./createPage.css";

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const { Title, Text } = Typography;
const children = [];
const { Option } = Select;

/*
const categoryMenu = () => {
  return (
    <Select defaultValue="카테고리를 선택해 주세요." onChange={handleChange}>
      <Option value="1">자취방 개꿀팁</Option>
      <Option value="2">내가 요리왕이다</Option>
      <Option value="3">나라는 신이 존재</Option>
    </Select>
  );
};
*/

const CreatePost = () => {
  return (
    <section className="write__container">
      <div className="container__title">
        <Title level={3}>Title</Title>
        <Input placeholder="Add a Title" />
        <Select defaultValue="카테고리를 선택해 주세요." onChange={handleChange}>
          <Option value="1">자취방 개꿀팁</Option>
          <Option value="2">내가 요리왕이다</Option>
          <Option value="3">나라는 신이 존재</Option>
        </Select>
      </div>
      <div className="container__tags">
        <Divider />
        <Title level={3}>Tags</Title>
        <Select mode="tags" placeholder="Add Tags" className="tags__tag">
          {children}
        </Select>
      </div>
      <div className="container__Description">
        <Divider />
        <Title level={3}>Description</Title>
        <div className = "container__editor">
        <QuillEditor placeholder={"Start Posting Something"} />
        </div>
      </div>
      <div className="container__Setting">
        <Divider />
        <Title Title level={3}>
          Settings
        </Title>
        <Checkbox onChange={onChange}>Close comments</Checkbox>
        <Checkbox onChange={onChange}>Secret Post</Checkbox>
      </div>
      <div className="container__Button">
        <Divider />
        <Button type="dashed">Update</Button>
        <Button danger>Cancel</Button>
      </div>
    </section>
  );
};

export default CreatePost;
