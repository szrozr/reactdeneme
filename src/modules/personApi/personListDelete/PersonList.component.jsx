import React from 'react';
import axios from 'axios';

import Navbar from '../../common/Navbar';
import './PersonList.style.scss';

class PersonList extends React.Component {
    state = {
        id: ''
    }

      handleChange = event => {
          this.setState({ id: event.target.value });
      }

      handleSubmit = event => {
          event.preventDefault();

          axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
              .then(res => {
                  console.log(res);
                  console.log(res.data);
              });
      }

      render () {
          return (
              <React.Fragment>
                  <Navbar active="delete"/>
                  Delete page
              </React.Fragment>
          );
      }
}

export default PersonList;
