import React,{useState} from 'react';
import './NewGoal.css'

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState('');
    
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString() ,
            text: enteredText
        };
        setEnteredText('');
        console.log(newGoal);
        props.onAddGoal(newGoal);
    };

    const onChangeHandler = event => {
        setEnteredText(event.target.value);    
    };

    return (
        <form className="goal-list" onSubmit={addGoalHandler}>
            <input type="text" placeholder ="Enter the text to add"value={enteredText} onChange={onChangeHandler}/>
            <button type="text">Add Goal</button>
        </form>
    );
}

export default NewGoal;