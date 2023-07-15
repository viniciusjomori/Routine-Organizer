import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import RoutineOrganizer from './Components/RoutineOrganizer/RoutineOrganizer';

function App() {

  let emptyTask = {
    id:"",
    name:"",
    time:"",
    day:"",
    important:false
  }

  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState(emptyTask)
  const [showRegisterForm, setShowRegisterForm] = useState(true)

  function onChange(e) {
    setTask({...task, [e.target.id]:e.target.value})
  }

  function buttonDay(day) {
    setTask({...task, day:day})
  }

  function buttonImportant() {
    if (task.important) {
      setTask({...task, important:false})
    } else {
      setTask({...task, important:true})
    }
  }

  function cleanForm() {
    setTask(emptyTask)
    setShowRegisterForm(true)
  }

  useEffect(() => {
    fetch("http://localhost:8080/tasks")
      .then(response => response.json())
      .then(response => setTasks(response))
  },[])
    

  function register() {
    fetch("http://localhost:8080/tasks", {
      method:"post",
      body:JSON.stringify(task),
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.message !== undefined) {
        alert(response.message)
      } else {
        setTasks([...tasks, response])
        cleanForm()
      }
    })
  }

  function edit_delete_cancel(task) {
    let taskTemp = {
      id:task.id,
      name:task.name,
      day:task.day,
      time:task.time,
      important:task.important
    }
    setTask(taskTemp)
    setShowRegisterForm(false)
  }

  function edit() {
    fetch("http://localhost:8080/tasks/"+task.id, {
      method:"put",
      body:JSON.stringify(task),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.message !== undefined) {
        alert(response.message)
      } else {
        let tasksTemp = [...tasks]
        let index = tasksTemp.findIndex((t) => {
          return t.id === task.id
        })
        tasksTemp[index] = response
        setTasks(tasksTemp)
        cleanForm()
      }
    })
  }

  function deleteTask() {
    console.log(task)
    fetch("http://localhost:8080/tasks/"+task.id, {
      method:"delete",
      headers: {
        "Content-type":"application/json",
        "accept":"application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      alert(response.message)
      let tasksTemp = [...tasks]
      let index = tasksTemp.findIndex((t) => {
        return t.id === task.id
      })
      tasksTemp.splice(index, 1)
      setTasks(tasksTemp)
      // Limpar formulario
      cleanForm()
    })
  }

  return (
    <div className="App">
      <h1>Routine Organizer</h1>
      <RoutineOrganizer
        tasks={tasks}
        edit_delete_cancel={edit_delete_cancel}
      />
      <Form
        onChange={onChange}
        buttonDay={buttonDay}
        buttonImportant={buttonImportant}
        register={register}
        task={task}
        showRegisterForm={showRegisterForm}
        edit={edit}
        delete={deleteTask}
        cancel={cleanForm}
      />
    </div>
  );
}

export default App;
