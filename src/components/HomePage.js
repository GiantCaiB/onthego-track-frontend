import "../css/style.css";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { JobBoard } from "./JobBoard";
import AddingForm from "./AddingForm";
import { Modal, Button } from "antd";

import { jobActions } from "../_actions";

class HomePage extends React.Component {
  state = {
    addingFormVisible: false,
    searchFormVisible: false,
    confirmLoading: false
  };
  componentDidMount() {}

  showAddingForm = () => {
    this.setState({
      addingFormVisible: true
    });
  };

  showSearchForm = () => {
    this.setState({
      searchFormVisible: true
    });
  };

  handleAddingSubmit = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      (async function() {
        await jobActions.create(values);
        form.resetFields();
      })();
      this.props.dispatch(jobActions.getAll());
      this.setState({
        confirmLoading: true
      });
      setTimeout(() => {
        this.setState({
          addingFormVisible: false,
          confirmLoading: false,
        });
      }, 2000);
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = () => {
    const form = this.formRef.props.form;
    form.resetFields();
    this.setState({
      addingFormVisible: false,
      searchFormVisible: false
    });
  };

  render() {
    const { user } = this.props;
    const { addingFormVisible, searchFormVisible, confirmLoading } = this.state;
    return (
      <div className="homeBoard">
        <div className="col-md-6 col-md-offset-3">
          <div className="controlPanel">
            <h4>Hi {user.username}.</h4>
            <div>
              <Button icon="plus" onClick={this.showAddingForm}>
                Add
              </Button>
              <Button icon="search" onClick={this.showSearchForm}>
                Search
              </Button>
              <Link to="/login">
                <Button type="danger" icon="close">
                  Logout
                </Button>
              </Link>
            </div>
            <div>
              <AddingForm
                wrappedComponentRef={this.saveFormRef}
                visible={addingFormVisible}
                onCancel={this.handleCancel}
                onCreate={this.handleAddingSubmit}
                confirmLoading={confirmLoading}
              />
              <Modal
                title="Search "
                visible={searchFormVisible}
                onCancel={this.handleCancel}
              >
                <p>This will be a form for searching</p>
              </Modal>
            </div>
          </div>
          <br />
          <JobBoard />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { jobsInfo, authentication } = state;
  const { jobs } = jobsInfo;
  const { user } = authentication;
  return {
    jobs,
    user
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
