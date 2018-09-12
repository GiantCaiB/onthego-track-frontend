import "../css/style.css";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { JobBoard } from "./JobBoard";
import JobForm from "./JobForm";
import { Modal, Button } from "antd";
import moment from "moment";

import { jobActions } from "../_actions";

class HomePage extends React.Component {
  state = {
    formVisible: false,
    updatingForm: false,
    searchVisible: false,
    confirmLoading: false,
    refreshLoading: false,
    selectedId: {},
    showLean: true
  };
  componentDidMount() { }

  reloadJobBoard = () => {
    this.setState({
      refreshLoading: true
    });
    this.state.showLean?(this.props.dispatch(jobActions.getUndone())):(this.props.dispatch(jobActions.getAll()));
    setTimeout(() => {
      this.setState({
        refreshLoading: false
      });
    }, 800);
  };

  showForm = () => {
    this.setState({
      formVisible: true
    });
  };

  displayFilter = () => {
    this.setState((prevState, props) => ({
      showLean: !prevState.showLean
    }));
    this.state.showLean?(this.props.dispatch(jobActions.getAll())):(this.props.dispatch(jobActions.getUndone()));
  };

  showSearch = () => {
    this.setState({
      searchVisible: true
    });
  };

  handleFormSubmit = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      if(!this.state.updatingForm){
        this.props.dispatch(jobActions.create(values));
      }
      else{
        this.props.dispatch(jobActions.update({...values,id: this.state.selectedId}));
      }
      this.setState({
        confirmLoading: true
      });
      setTimeout(() => {
        this.state.showLean?(this.props.dispatch(jobActions.getUndone())):(this.props.dispatch(jobActions.getAll()));
        form.resetFields();
        this.setState({
          formVisible: false,
          confirmLoading: false,
          updatingForm : false
        });
      }, 2200);
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleCancel = () => {
    const form = this.formRef.props.form;
    form.resetFields();
    this.setState({
      formVisible: false,
      searchVisible: false,
      updatingForm : false
    });
  };

  handleDoubleClick = (rowInfo) => {
    const form = this.formRef.props.form;
    this.setState({
      selectedId: rowInfo.id
    });
    form.setFieldsValue({
      store: rowInfo.store,
      customername: rowInfo.customername,
      contact: rowInfo.contact,
      deviceDesc: rowInfo.deviceDesc,
      receivedDate: moment(rowInfo.receivedDate),
      receivedStaff: [rowInfo.receivedStaff],
      quoteStaff: [rowInfo.quoteStaff],
      fullfilledDate:  rowInfo.fullfilledDate===null?"":moment(rowInfo.fullfilledDate),
      fullfilledStaff: [rowInfo.fullfilledStaff],
      issueDesc: rowInfo.issueDesc,
      quotePrice: rowInfo.quotePrice,
      instore: rowInfo.instore,
      accessories: rowInfo.accessories,
      confirmed: rowInfo.confirmed,
      fixed: rowInfo.fixed
    });
    this.setState({
      updatingForm : true,
      formVisible: true
    });
  };

  render() {
    const { user } = this.props;
    const {
      formVisible,
      searchVisible,
      updatingForm,
      confirmLoading,
      refreshLoading,
      showLean
    } = this.state;
    return (
      <div className="homeBoard">
        <div className="col-md-6 col-md-offset-3">
          <div className="controlPanel">
            <h4>Hi {user.username}.</h4>
            <div>
              <Button
                icon="reload"
                onClick={this.reloadJobBoard}
                loading={refreshLoading}
              >
                Refresh
              </Button>
              <Button icon="plus" onClick={this.showForm}>
                Add
              </Button>
              <Button icon={showLean?"file-text":"file"} onClick={this.displayFilter}>
                {showLean?"Display all records":"Show undone only"}
              </Button>
              <Button icon="search" onClick={this.showSearch}>
                Search
              </Button>
              <Link to="/login">
                <Button type="danger" icon="close">
                  Logout
                </Button>
              </Link>
            </div>
            <div>
              <JobForm
                wrappedComponentRef={this.saveFormRef}
                visible={formVisible}
                formTitle={updatingForm?"Updating A Record":"Adding A New Record"}
                okText={updatingForm?"Update":"Add"}
                onCancel={this.handleCancel}
                onCreate={this.handleFormSubmit}
                confirmLoading={confirmLoading}
              />

              <Modal
                title="Search "
                visible={searchVisible}
                onCancel={this.handleCancel}
              >
                <p>This will be a form for searching</p>
              </Modal>
            </div>
          </div>
          <br />
          <JobBoard handleDoubleClick={this.handleDoubleClick} />
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
