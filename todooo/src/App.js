import React, { Component } from 'react';

class App extends Component {
  state = {
    tasks: [
      {
        title: "Eat Food",
        details: "Find a Food. Eat it."
      },
      {
        title: "Learn React",
        details: "True"
      }
    ],
  }
  render() {
    let task_list = this.state.tasks.map(task => (
      <p key={task.title}>
        {task.title} - {task.details}
      </p>
    ));
    return <div className="App">{task_list}</div>;
  }
}

export default App;