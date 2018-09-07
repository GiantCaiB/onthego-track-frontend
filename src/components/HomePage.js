import "../css/style.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {JobBoard} from "./JobBoard";

class HomePage extends React.Component {
    componentDidMount() { }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Hi {user.username}!</h3>
                <p> Admin: {user.admin.toString()}</p>
                <p>You're logged in now!</p>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
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
