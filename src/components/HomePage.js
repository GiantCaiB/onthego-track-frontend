import "../css/style.css";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { JobBoard } from "./JobBoard";
import AddingForm from "./AddingForm";
import { Modal, Button } from "antd";

class HomePage extends React.Component {
  state = {
    addingFormVisible: false,
    searchFormVisible: false
  };
  componentDidMount() { }

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
      console.log("Received values of form: ", values);
      form.resetFields();
      this.setState({
        addingFormVisible: false
      });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = () => {
    this.setState({
      addingFormVisible: false,
      searchFormVisible: false
    });
  };

  render() {
    const { user } = this.props;
    const { addingFormVisible, searchFormVisible } = this.state;
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
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
