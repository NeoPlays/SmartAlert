import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'task#1',
        day: 'Jan 14th at 2:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'task#2',
        day: 'Jan 14th at 3:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'task#3',
        day: 'Jan 14th at 4:30',
        reminder: false,
    }
    ])

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ('no Tasks') }
    </div>
  );
}

export default App;
