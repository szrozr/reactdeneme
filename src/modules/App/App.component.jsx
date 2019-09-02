import React, { PureComponent } from 'react';
import { Switch, Route } from "react-router-dom";

import PersonList from '../personApi/personList';
import PersonDelete from '../personApi/personListDelete';
import PersonPost from '../personApi/personListPost';
import Contact from '../personApi/Contact';
import Routes from './Routes';

class App extends PureComponent {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={PersonList} />
                <Route exact path={`/${Routes.personDelete}`} component={PersonDelete} />
                <Route exact path={`/${Routes.personPost}`} component={PersonPost} />
                <Route exact path={`/${Routes.contact}`} component={Contact} />
            </Switch>
        );
    }
}

export default App;
