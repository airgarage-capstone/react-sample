import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <div className="Form">
                <h1 className="FormTitle">Form</h1>
                <form>
                    <label>
                        Name:
                         <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Form;
