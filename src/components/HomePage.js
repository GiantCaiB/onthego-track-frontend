import "../css/style.css";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { JobBoard } from "./JobBoard";
import { Modal, Button } from "antd";

class HomePage extends React.Component {
  state = {
    addingFormVisible: false,
    searchFormVisible: false
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

  handleCancel = () => {
    this.setState({
      addingFormVisible: false,
      searchFormVisible: false
    });
  };

  render() {
    const { user } = this.props;
    const { addingFormVisible, searchFormVisible} = this.state;
    return (
      <div className="homeBoard">
        <div className="col-md-6 col-md-offset-3">
          <div className="controlPanel">
            <h4>Hi {user.username}.</h4>
            <div>
              <Button icon="plus" onClick={this.showAddingForm}>Add</Button>
              <Button icon="search" onClick={this.showSearchForm}>Search</Button>
              <Link to="/login">
                <Button type="danger" icon="close">
                  Logout
                </Button>
              </Link>
            </div>
            <div>
            <Modal
              title="Adding A Record"
              visible={addingFormVisible}
              onCancel={this.handleCancel}
            >
              <p>This will be a form for adding new jobs</p>
            </Modal>
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
