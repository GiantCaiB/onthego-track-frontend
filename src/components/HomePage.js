import "../css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { jobActions } from "../_actions";

import { JobBoard } from "./JobBoard";

class HomePage extends React.Component {

  componentDidMount() { }

  render() {
    const { user } = this.props;
    return (
      <div className="homeBoard">
        <div className="col-md-6 col-md-offset-3">
          <h3>Hi {user.username}!</h3>
          <JobBoard />
          <p>
            <Link to="/login">Logout</Link>
          </p>
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
