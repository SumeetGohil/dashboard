import React from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends React.Component {
    
    render() {
        return (
            <div className="col-sm-3">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/security'>Security</Link></li>
                    <li><Link to='/sonar'>Sonar</Link></li>
                </ul>
            </div>
        );
    }
}