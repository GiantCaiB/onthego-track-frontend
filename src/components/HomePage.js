import "../css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { jobActions } from "../_actions";

import { JobBoard } from "./JobBoard";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(jobActions.getAll());
      }
  componentDidMount() {}

  render() {
    const { user } = this.props;
    return (
      <div className="homeBoard">
        <div className="col-md-6 col-md-offset-3">
          <h3>Hi {user.username}!</h3>
          <JobBoard jobs={this.props.jobs} />
          <p>
            <Link to="/login">Logout</Link>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication, jobsInfo } = state;
  const { user } = authentication;
  const { jobs } = jobsInfo;
  return {
    user,
    jobs
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
