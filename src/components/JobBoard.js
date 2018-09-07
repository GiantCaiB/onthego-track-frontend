import React from "react";
import { connect } from "react-redux";

import { jobActions } from "../_actions";

import ReactTable from "react-table";

class JobBoard extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(jobActions.getAll());
  }

  componentDidMount() {}
  render() {
    const { jobs } = this.props;
    const columns = [
      {
        Header: "Job ID",
        accessor: "jobID",
        width: 100
      },
      {
        Header: "Store",
        accessor: "store",
        width: 100
      },
      {
        Header: "Customer Name",
        accessor: "customername",
        maxWidth: 200
      },
      {
        Header: "Contact",
        accessor: "contact",
        maxWidth: 200
      },
      {
        Header: "Device",
        accessor: "deviceDesc",
        maxWidth: 200
      },
      {
        Header: "Issue",
        accessor: "issueDesc",
        minWidth: 300
      },
      {
        Header: "Receiver",
        accessor: "receivedStaff",
        maxWidth: 200
      },
      {
        Header: "Received Date",
        accessor: "receivedDate",
        maxWidth: 200
      }
    ];
    return <ReactTable data={jobs} columns={columns} />;
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

const connectedJobBoard = connect(mapStateToProps)(JobBoard);
export { connectedJobBoard as JobBoard };
