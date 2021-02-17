import React, { Component } from 'react';
import TodayList from "./Components/TodayList";
import CreateTaskForm from "./Components/CreateTaskForm";

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
  
  addTask = (title, details) => {
    let newTask = { title: title, details: details };
    let tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({ tasks: tasks });
  };

  updateLocalStorage = () => {
    // This next line will stringify the tasks list
    let tasks = JSON.stringify({
      tasks: this.state.tasks
    });
    localStorage.setItem("tasks", tasks);
  };

  retrieveFromLocalStorage = () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState({ tasks: tasks.tasks });
    }
};

  componentDidMount() {
    this.retrieveFromLocalStorage();
  }

  render() {
    // let task_list = this.state.tasks.map(task => (
    //   <p key={task.title}>
    //     {task.title} - {task.details}
    //   </p>
    // ));
    return (
      <div className="App">
        <CreateTaskForm addTask={this.addTask}/>
        <TodayList tasks={this.state.tasks} />
      </div>
    );
  }
      
}

export default App;