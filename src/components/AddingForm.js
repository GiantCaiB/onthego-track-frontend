import "antd/dist/antd.css";
import React from "react";
import { Modal, Form, Input, Radio, DatePicker, Cascader } from "antd";

const FormItem = Form.Item;

const AddingForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
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
          title="Add a new record"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Store">
              {getFieldDecorator("store", {
                rules: [
                  {
                    required: true,
                    message: "Please select a store!"
                  }
                ]
              })(
                <Radio.Group>
                  <Radio value={1}>WG</Radio>
                  <Radio value={2}>Glen</Radio>
                  <Radio value={3}>Chinatown</Radio>
                  <Radio value={4}>Bourke</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem label="Customer Name">
              {getFieldDecorator("customername", {
                rules: [
                  {
                    required: true,
                    message: "Please input the customer name!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Customer Contact">
              {getFieldDecorator("contact", {
                rules: [
                  {
                    required: true,
                    message: "Please input the customer contact!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Device Model">
              {getFieldDecorator("deviceDesc", {
                rules: [
                  {
                    required: true,
                    message: "Please input the device model!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Device Issue">
              {getFieldDecorator("issueDesc", {
                rules: [
                  {
                    required: true,
                    message: "Please input the device issue!"
                  }
                ]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="With Accessoeries?">
              {getFieldDecorator("accessories", {
                initialValue: ["N/A"]
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Received By">
              {getFieldDecorator("receivedStaff", {
                rules: [
                  {
                    type: "array",  
                    required: true,
                    message: "Please select the staff who received this device!"
                  }
                ]
              })(<Cascader options={users} />)}
            </FormItem>
            <FormItem label="Received Date">
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
            <FormItem label="Quoted By">
              {getFieldDecorator("quoteStaff", {
                rules: [
                  {
                    type: "array"                  }
                ]
              })(<Cascader options={users} />)}
            </FormItem>
            <FormItem label="Quoted Price">
              {getFieldDecorator("quotePrice", {})(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Instore?">
              {getFieldDecorator("instore", {
                  rules: [
                    {
                      required: true,
                      message: "Please indicate whether this device will be repaired within OnTheGo or sent away!"
                    }
                  ]
              })(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem label="Confirmed?">
              {getFieldDecorator("confirmed", {
              })(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem label="Fixed?">
              {getFieldDecorator("fixed", {
              })(
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              )}
            </FormItem>
            <FormItem label="Fullfilled By">
              {getFieldDecorator("fullfilledStaff", {
                rules: [
                  {
                    type: "array",
                  }
                ]
              })(<Cascader options={users} />)}
            </FormItem>
            <FormItem label="Fullfilled Date">
              {getFieldDecorator("fullfilledDate", {
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
          </Form>
        </Modal>
      );
    }
  }
);

export default AddingForm;
