import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class AccountInfo extends Component {
    render() {
        const { user } = this.props
        return (
            <div className="community-bank">
                <h1>Account Info</h1>
                { user && <p>You are logged in as: <strong>{ user.name }</strong></p>}
                {!user && <p>You must login! <Link to="/" >Log in</Link></p>}
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AccountInfo)
