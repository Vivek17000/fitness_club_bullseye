import React, { useState } from "react";
import { Form, Input, Button, Table } from "antd";

const FormItem = Form.Item;

const MemberForm = ({ form, onFinish }) => {
  return (
    <Form
      form={form}
      name="fitness-club-registration"
      onFinish={onFinish}
    >
      <FormItem
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Phone Number"
        name="phoneNumber"
        rules={[
          { required: true, message: "Please input your phone number!" },
        ]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Add Member
        </Button>
      </FormItem>
    </Form>
  );
};

const MemberTable = ({ members, form }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div>
      {members.length > 0 && (
        <div>
          <h2>User added successfully!</h2>
          <Button
            type="primary"
            onClick={() => {
              form.resetFields();
            }}
          >
            View Member List
          </Button>
          <Table columns={columns} dataSource={members} />
        </div>
      )}
    </div>
  );
};

const fitness = () => {
  const [members, setMembers] = useState([]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setMembers((prevMembers) => [...prevMembers, values]);
  };

  return (
    <div>
      <MemberForm form={form} onFinish={onFinish} />
      <MemberTable members={members} form={form} />
    </div>
  );
};

export default fitness;
