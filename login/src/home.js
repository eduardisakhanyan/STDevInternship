import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    logOut = () => {
        localStorage.removeItem('loggedIn');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {Object.keys(this.props.user).map((key, index) =>
                            <li key={index}>{this.props.user[key]}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <button onClick={this.logOut}>LogOut</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Home);