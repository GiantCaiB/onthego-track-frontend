import React from "react";
import "antd/dist/antd.css";
import { Modal, Form, Input, Radio } from "antd";

const FormItem = Form.Item;

const AddingForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
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
              {getFieldDecorator("modifier", {
                rules: [
                  {
                    required: true,
                    message: "Please select a store!"
                  }
                ]
              })(
                <Radio.Group>
                  <Radio value="1">WG</Radio>
                  <Radio value="2">Glen</Radio>
                  <Radio value="3">Chinatown</Radio>
                  <Radio value="4">Bourke</Radio>
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
          </Form>
        </Modal>
      );
    }
  }
);

export default AddingForm;
