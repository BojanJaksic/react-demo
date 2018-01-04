import React, { Component } from 'react';
import './App.css';
import Person from './Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'John', lastname: 'Deer', age: 99 },
      { id: 2, name: 'Sue', lastname: 'Midnight', age: 45 },
      { id: 3, name: 'Kirk', lastname: 'Douglas', age: 125 },
    ],
    showPersons: false
  };

  toggleUsersHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  deletePersonHandler = (person) => {
    const persons = this.state.persons.filter(p => p.id !== person.id);
    this.setState({ persons: persons });
  }

  editPersonHandler = (event, personIndex) => {
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  getPersonsHtml = () => {
    if (this.state.showPersons) {
      return this.state.persons.map((p, index) => {
        return (
          <Person person={p} key={p.id} click={(e) => this.deletePersonHandler(p)} changed={(e) => this.editPersonHandler(e, index)}/>
        )
      });
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <div style={{padding: '20px 0'}}>
          <button type="button" onClick={this.toggleUsersHandler}>Toggle Users Visibility</button>
        </div>
          {this.getPersonsHtml(this.state)}
      </div>
    );
  }
}

export default App;