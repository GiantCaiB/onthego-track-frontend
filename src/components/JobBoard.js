import "../css/style.css";
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
        Header: "ID",
        accessor: "jobID",
        width: 40
      },
      {
        Header: "Store",
        accessor: "store",
        width: 50
      },
      {
        Header: "Customer Name",
        accessor: "customername",
        maxWidth: 100
      },
      {
        Header: "Contact",
        accessor: "contact",
        maxWidth: 100
      },
      {
        Header: "Device",
        accessor: "deviceDesc",
        maxWidth: 100
      },
      {
        Header: "Issue",
        accessor: "issueDesc",
        maxWidth: 200
      },
      {
        Header: "Accessories",
        accessor: "accessories",
        maxWidth: 80
      },
      {
        Header: "Receiver",
        accessor: "receivedStaff",
        maxWidth: 80
      },
      {
        Header: "Received Date",
        accessor: "receivedDate",
        maxWidth: 100
      },
      {
        Header: "Quoted By",
        accessor: "quoteStaff",
        width: 80
      },
      {
        Header: "Quoted Price",
        accessor: "quoteDate",
        width: 90
      },
      {
        Header: "Instore?",
        accessor: "instore",
        width: 70
      },
      {
        Header: "Confirmed?",
        accessor: "confirmed",
        width: 80
      },
      {
        Header: "Fixed?",
        accessor: "fixed",
        width: 50
      },
      {
        Header: "Fullfilled By",
        accessor: "fullfilledStaff",
        width: 80
      },
      {
        Header: "Fullfilled Date",
        accessor: "fullfilledDate",
        width: 100
      }
    ];
    return (
      <div className="jobBoard">
        <div className="grey lighten-5">
          <ReactTable data={jobs} columns={columns} defaultPageSize="15"/>
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

const connectedJobBoard = connect(mapStateToProps)(JobBoard);
export { connectedJobBoard as JobBoard };
