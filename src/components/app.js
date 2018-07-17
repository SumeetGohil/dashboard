import React from 'react';
import { Sidebar } from './sidebar';
import { Main } from './main';

export class App extends React.Component {

    render(){
        return (
            <div className="row">
                <Sidebar/>
                <Main/>
            </div>
        );
    }
}