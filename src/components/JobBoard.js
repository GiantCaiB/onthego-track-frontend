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

  storeRender(value) {
    switch (value) {
      case 1:
        return (
          <div
            style={{
              color: "DarkGreen"
            }}
          >
            {"WG"}
          </div>
        );
      case 2:
        return (
          <div
            style={{
              color: "MediumBlue"
            }}
          >
            {"Glen"}
          </div>
        );
      case 3:
        return (
          <div
            style={{
              color: "Crimson"
            }}
          >
            {"Chinatown"}
          </div>
        );
      case 4:
        return (
          <div
            style={{
              color: "OrangeRed"
            }}
          >
            {"Bourke"}
          </div>
        );
      default:
        return;
    }
  }

  booleanRender(value) {
    if (value) {
      return (
        <div
          style={{
            color: "LimeGreen"
          }}
        >
          {"✔"}
        </div>
      );
    }
    return (
      <div
        style={{
          color: "Red"
        }}
      >
        {"✘"}
      </div>
    );
  }

  render() {
    const { jobs, handleDoubleClick } = this.props;
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        width: 25
      },
      {
        Header: "Store",
        accessor: "store",
        width: 70,
        Cell: ({ value }) => this.storeRender(value)
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
            accessor: "issueDesc",
            width: 200
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
            accessor: "receivedStaff",
            width: 70
          },
          {
            Header: "Date",
            accessor: "receivedDate",
            width: 100
          }
        ]
      },
      {
        Header: "Quoted",
        columns: [
          {
            Header: "Staff",
            accessor: "quoteStaff",
            width: 70
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
            accessor: "fullfilledStaff",
            width: 70
          },
          {
            Header: "Fullfilled Date",
            accessor: "fullfilledDate",
            width: 90
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
            defaultPageSize={16}
            getTrProps={(state, rowInfo, column, instance) => {
              return {
                onDoubleClick: e => {
                  handleDoubleClick(rowInfo.original.id);
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
