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

  componentDidMount() { }

  booleanRender(value) {
    if (value) {
      return <div
        style={{
          color: "green"
        }}>Yes</div>;
    }
    return <div
      style={{
        color: "red"
      }}>No</div>;
  }

  render() {
    const { jobs } = this.props;
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        width: 40
      },
      {
        Header: "Store",
        accessor: "store",
        width: 50
      },
      {
        Header: "Customer",
        columns: [
          {
            Header: " Name",
            accessor: "customername"
          },
          {
            Header: "Contact",
            accessor: "contact"
          }
        ]
      },
      {
        Header: "Device",
        columns: [
          {
            Header: "Model",
            accessor: "deviceDesc"
          },
          {
            Header: "Issue",
            accessor: "issueDesc"
          },
          {
            Header: "Accessories",
            accessor: "accessories"
          }
        ]
      },
      {
        Header: "Received",
        columns: [
          {
            Header: "Staff",
            accessor: "receivedStaff"
          },
          {
            Header: "Date",
            accessor: "receivedDate"
          }
        ]
      },
      {
        Header: "Quoted",
        columns: [
          {
            Header: "Staff",
            accessor: "quoteStaff"
          },
          {
            Header: "Price",
            accessor: "quotePrice"
          }
        ]
      },
      {
        Header: "Status",
        columns: [
          {
            Header: "Instore?",
            accessor: "instore",
            minWidth: 60,
            Cell: ({ value }) => this.booleanRender(value)
          },
          {
            Header: "Confirmed?",
            accessor: "confirmed",
            minWidth: 80,
            Cell: ({ value }) => this.booleanRender(value)
          },
          {
            Header: "Fixed?",
            accessor: "fixed",
            minWidth: 50,
            Cell: ({ value }) => this.booleanRender(value)
          }
        ]
      },
      {
        Header: "Fullfilled",
        columns: [
          {
            Header: "Staff",
            accessor: "fullfilledStaff"
          },
          {
            Header: "Fullfilled Date",
            accessor: "Date"
          }
        ]
      }
    ];
    return (
      <div className="jobBoard">
        <div className="grey lighten-5">
          <ReactTable
            data={jobs}
            columns={columns}
            defaultPageSize={15}
            getTrProps={(state, rowInfo, column, instance) => {
              return {
                onDoubleClick: (e) => {
                  console.log("Selected ID: ", rowInfo.original.id);
                }
              };
            }}
          />
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
