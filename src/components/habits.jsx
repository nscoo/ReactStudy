import React, { Component } from 'react'
import Habit from './habit';

class Habits extends Component {
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
    
    handleDelete = (habit) => { 
        console.log(`habitDelete ${habit.name}`);
        const habits = this.state.habits.filter(item=>item.id!==habit.id);
        this.setState({habits})
    };

    render() {
        return (
            <ul>
                {this.state.habits.map(habit => (
                    <Habit key={habit.id}
                     habit={habit} 
                     onIncrement={this.handleIncrement}
                     onDecrement={this.handleDecrement}
                     onDelete={this.handleDelete}
                   />
                ))}

            </ul>
        )
    }
}
export default Habits