import React from "react";
import imgBackgroud from "../../image/download (7).jpg";
import "./ContactUs.css";
import { Button, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};

export default function ContactUs() {
  return (
    <>
    <div className="container-contact-us">
      <div className="img-backgroud-title">
        <img src={imgBackgroud} alt="" className="w-100 h-75" />
        <div>
          <h1>CONTACT US</h1>
          <p>
            Thank you for your interest in our products & services. <br />{" "}
            Please fill out the form below or e-mail us at <br />{" "}
            ems@ntq-solution.com.vn and we will get back to you <br /> promptly.
          </p>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 input-form-container p-5 mb-5">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="row m-auto">
                <div className="col-6">
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Full Name!",
                      },
                    ]}
                  >
                    <Input placeholder="Full Name" className="w-100 input-form" />
                  </Form.Item>
                </div>
                <div className="col-6">
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Company Name!",
                      },
                    ]}
                  >
                    <Input placeholder="Company Name" />
                  </Form.Item>
                </div>
                <div className="col-6">
                <Form.Item
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input type="email" placeholder="Emaill" />
                  </Form.Item>
                </div>
                <div className="col-6">
                <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Phone!",
                      },
                    ]}
                  >
                    <Input type="number" placeholder="Phone" />
                  </Form.Item>
                </div>
                <div className="col-12">
                <Form.Item
                    name="text"
                    rules={[
                      {
                        required: true,
                        message: "Please input your project description!",
                      },
                    ]}
                  >
                    <Input.TextArea type="text" placeholder="Project Description" className="project-description"  />
                  </Form.Item>
                </div>

                <Form.Item
                  className="text-center"
                >
                  <Button type="primary" htmlType="submit" className="w-25">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      </div>
    </>
  );
}
