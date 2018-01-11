import React, { Component } from 'react'
import logo from './communityBank.svg'
import './Home.css'
import Auth0Lock from 'auth0-lock'
import axios from 'axios'
import { connect } from "react-redux";
import { login } from './ducks/reducer'

class Home extends Component {
    constructor() {
        super()
        this.lock = null
        this.login = this.login.bind(this)
    }

    componentDidMount() {
        this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN )
        this.lock.on('authenticated', authResult => {
            this.lock.getUserInfo(authResult.accessToken, (error, user) => {
                axios.post('/login', { userId: user.sub }).then(response => {
                    this.props.login(response.data.user)
                    this.props.history.push('/private')
                })
            })
        })

    }

    login() {
        this.lock.show()
    }

    render() {
        return (
            <div className="community-bank">
                <img src={ logo } className="logo" alt="logo"/>
                <button onClick={this.login} className="login-button">Log in</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
        login: login
}

export default connect(null, mapDispatchToProps)(Home)
