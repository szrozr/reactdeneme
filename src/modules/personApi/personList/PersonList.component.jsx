import React from 'react';
import axios from 'axios';

import Navbar from '../../common/Navbar';
import './PersonList.style.scss';

class PersonList extends React.Component {
    componentDidMount () {
        const abortController = new AbortController();
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            });

        abortController.abort();
    }

    state = {
        persons: []
    }

    render () {
        const { persons } = this.state;
        return (
            <React.Fragment>
                <Navbar active="homepage" />
                <ul>
                    { persons.map(person => <li key={person.id}>{ person.name }</li>) }
                </ul>
            </React.Fragment>
        );
    }
}

export default PersonList;
