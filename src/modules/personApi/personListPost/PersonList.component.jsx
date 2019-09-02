import React from 'react';
import axios from 'axios';

import Navbar from '../../common/Navbar';
import './PersonList.style.scss';

class PersonList extends React.Component {
    state = {
        name: ''
    }

      handleChange = event => {
          this.setState({ name: event.target.value });
      }

      handleSubmit = event => {
          const { name } = this.state;
          event.preventDefault();

          const user = {
              name: name
          };

          axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
              .then(res => {
                  console.log('res: ', res);
                  console.log('res.data: ', res.data);
              });
      }

      render () {
          return (
              <React.Fragment>
                  <Navbar active="post"/>
                  <form onSubmit={this.handleSubmit}>
                      <label>
                Person Name:
                          <input type="text" name="name" onChange={this.handleChange} />
                      </label>
                      <button type="submit">Add</button>
                  </form>
              </React.Fragment>
          );
      }
}

export default PersonList;
