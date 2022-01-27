import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
    // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // );
    const [courseGoals, setCourseGoals] = useState([
      {id: 'cg1', text: 'Finsih the Course'},
      {id: 'cg2', text: 'Learn all about the course Main topic'},
      {id: 'cg3', text: 'Help other students in the course Q&A'}
    ]);

    const addNewGoalHandler = newGoal =>{
      // setCourseGoals(courseGoals.concat(newGoal));
      setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
    };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;