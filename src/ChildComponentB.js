import React, { Component } from 'react';
import './ChildComponentB.sass';

class ChildComponent extends Component {
    render() {
        return (
            <div className="ChildComponentB">
                <h2>Green Header</h2>
            </div>
        );
    }
}

export default ChildComponent;
