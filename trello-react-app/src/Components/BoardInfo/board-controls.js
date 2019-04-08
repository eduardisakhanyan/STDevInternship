import React, { Component } from 'react';

class BoardControls extends Component {
    render() {
        return(
        <div className="board-controls">

            <button className="board-title btn">
                <h2>Web Development</h2>
            </button>

            <button className="star-btn btn" aria-label="Star Board">
                <i className="far fa-star" aria-hidden="true"></i>
            </button>

            <button className="personal-btn btn">Personal</button>

            <button className="private-btn btn"><i className="fas fa-briefcase private-btn-icon" aria-hidden="true"></i>Private</button>

	    </div>
        );
    }
}

export default BoardControls;