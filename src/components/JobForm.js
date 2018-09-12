import "../css/style.css";
import "antd/dist/antd.css";
import React from "react";
import { Modal, Form, Input, Radio, DatePicker, Cascader } from "antd";

const FormItem = Form.Item;

const JobForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible,formTitle,okText, onCancel, onCreate, form, confirmLoading } = this.props;
      const { getFieldDecorator } = form;
      const users = [
        {
          value: "Lawrence",
          label: "Lawrence"
        },
        {
          value: "Danny",
          label: "Danny"
        },
        {
          value: "Chris",
          label: "Chris"
        },
        {
          value: "Eric",
          label: "Eric"
        },
        {
          value: "Philip",
          label: "Philip"
        },
        {
          value: "Daniel",
          label: "Daniel"
        },
        {
          value: "Steve",
          label: "Steve"
        },
        {
          value: "Coco",
          label: "Coco"
        },
        {
          value: "Olivia",
          label: "Olivia"
        }
      ];
      return (
        <Modal
          visible={visible}
          title={formTitle}
          okText={okText}
          onCancel={onCancel}
          onOk={onCreate}
          confirmLoading={confirmLoading}
        >
          <Form>
            <FormItem
              label="Store"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("store", {
                rules: [
                  {
                    required: true,
                    message: "Please select a store!"
                  }
                ]
              })(
                <Radio.Group>
                  <Radio value={2}>Glen</Radio>
                  <Radio value={3}>Chinatown</Radio>
                  <Radio value={1}>WG</Radio>
                  <Radio value={4}>Bourke</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem
              label="Customer Name"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("customername", {
                rules: [
                  {
                    required: true,
                    message: "Please input the customer name!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem
              label="Customer Contact"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("contact", {
                rules: [
                  {
                    required: true,
                    message: "Please input the customer contact!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem
              label="Device Model"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("deviceDesc", {
                rules: [
                  {
                    required: true,
                    message: "Please input the device model!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem
              label="Device Issue"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator("issueDesc", {
                rules: [
                  {
                    required: true,
                    message: "Please input the device issue!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem
              label="With Accessoeries?"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator("accessories", {
                initialValue: ["N/A"]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem
              label="Received By"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 6 }}
            >
              {getFieldDecorator("receivedStaff", {
                rules: [
                  {
                    type: "array",
                    required: true,
                    message: "Please select the staff who received this device!"
                  }
                ]
              })(<Cascader options={users} placeholder={"Select a staff"}/>)}
            </FormItem>
            <FormItem
              label="Received Date"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 6 }}
            >
              {getFieldDecorator("receivedDate", {
                rules: [
                  {
                    required: true,
                    message: "Please select a received date!"
                  }
                ]
              })(
                <DatePicker
                  dateRender={current => {
                    const style = {};
                    return (
                      <div className="ant-calendar-date" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              )}
            </FormItem>
            <FormItem
              label="Quoted By"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 6 }}
            >
              {getFieldDecorator("quoteStaff", {
                rules: [
                  {
                    type: "array"
                  }
                ]
              })(<Cascader options={users} placeholder={"Select a staff"}/>)}
            </FormItem>
            <FormItem
              label="Quoted Price"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 4 }}
            >
              {getFieldDecorator("quotePrice", {})(<Input type="textarea" />)}
            </FormItem>
            <FormItem
              label="Instore?"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator("instore", {
                rules: [
                  {
                    required: true,
                    message:
                      "Please indicate whether this device will be repaired within OnTheGo or sent away!"
                  }
                ]
              })(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem
              label="Confirmed?"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator("confirmed", {})(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem
              label="Fixed?"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator("fixed", {})(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem
              label="Fullfilled By"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 6 }}
            >
              {getFieldDecorator("fullfilledStaff", {
                rules: [
                  {
                    type: "array"
                  }
                ]
              })(<Cascader options={users} placeholder={"Select a staff"}/>)}
            </FormItem>
            <FormItem
              label="Fullfilled Date"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 6 }}
            >
              {getFieldDecorator("fullfilledDate", {})(
                <DatePicker
                  dateRender={current => {
                    const style = {};
                    return (
                      <div className="ant-calendar-date" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default JobForm;
