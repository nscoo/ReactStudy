
import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react'
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
};
handleIncrement = (habit) => {
  console.log(`habitIncrement ${habit.name}`);
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits[index].count++;
  this.setState({habits});

};

handleDecrement = (habit) => {
  console.log(`habitDecrement ${habit.name}`)
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  const count = habits[index].count-1;
  habits[index].count = count<0 ? 0 : count;
  this.setState(habit)
};
handleAdd = name =>{
  const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
  this.setState({habits})
}
handleDelete = (habit) => { 
  console.log(`habitDelete ${habit.name}`);
  const habits = this.state.habits.filter(item=>item.id!==habit.id);
  this.setState({habits})
};
  render() {
    return (
      <>
      <Navbar totalCount={this.state.habits.filter(item=>item.count>0).length}/>
      <Habits
      habits={this.state.habits}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      />
      </>
    )
  }
}


export default App;
