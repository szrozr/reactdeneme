import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './modules/App';
import './styles/index.style.scss';

class Main extends React.Component {
    render () {
        return (
            <Router>
                <Route strict path="/" component={App} />
            </Router>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
