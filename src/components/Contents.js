import {Route, Switch} from 'react-router-dom';
import React from 'react';

import HomePage from '../pages/home/Home';
import AddUser from '../pages/addUser/AddUser';
import Users from '../pages/users/Users'

const Contents = () => {    
    
    return ( 
        <main className = "main">
            <Switch>
                <Route path = '/adv-hw-24-OlehMykolaichuk/' exact component = {HomePage}/>
                <Route path = '/adv-hw-24-OlehMykolaichuk/users' exact component = {Users}/>
                <Route path = '/adv-hw-24-OlehMykolaichuk/addUser' exact component = {AddUser}/>
                <Route path = '*'>
                    <p className = "error flex">404: page not found</p>
                </Route>
            </Switch>
        </main>
    );
}
 
export default Contents;