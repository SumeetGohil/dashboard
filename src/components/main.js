import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Security } from './security';
import { Sonar } from './sonar';
import { Home } from './home';

export class Main extends React.Component {
    
    render() {
        return (
            <div className="col-sm-9">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/security' component={Security}/>
                    <Route path='/sonar' component={Sonar}/>
                </Switch>
            </div>
        );
    }
}