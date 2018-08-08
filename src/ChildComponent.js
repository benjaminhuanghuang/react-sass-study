import React, { Component } from 'react';
import './ChildComponent.css';

class ChildComponent extends Component {
    render() {
        return (
            <div className="ChildComponent">
                <h2>Red Header</h2>
            </div>
        );
    }
}

export default ChildComponent;
