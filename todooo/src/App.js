import React, { Component } from 'react';
import TodayList from "./Components/TodayList";

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
      },
      {
        title: "Drink Water",
        details: "2 Litres Today"
      },
    ],
  }
  render() {
    // let task_list = this.state.tasks.map(task => (
    //   <p key={task.title}>
    //     {task.title} - {task.details}
    //   </p>
    // ));
    return <div className="App"><TodayList tasks={this.state.tasks} /></div>;
  }
}

export default App;