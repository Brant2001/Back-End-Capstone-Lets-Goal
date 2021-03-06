import React, { useContext, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { GoalTypeContext } from '../goalType/GoalTypeProvider'
import { DifficultyContext } from '../difficulty/DifficultyProvider'
import { UserGoalContext } from './UserGoalProvider'
import { Button } from 'reactstrap'

export default ({ setActionInput, setGoalCompsSeen }) => {
    const { addGoal } = useContext(UserGoalContext)
    const { goalTypes, getAllGoalTypes } = useContext(GoalTypeContext);
    const { difficulties, getAllDifficulties } = useContext(DifficultyContext);

    const title = useRef('title')
    const description = useRef('description')
    const goalType = useRef('goalType')
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    const difficulty = useRef('difficulty')

    const constructNewGoal = () => {

        const newGoalObject = {
            title: title.current.value,
            description: description.current.value,
            dateCreated: new Date(),
            goalTypeId: parseInt(goalType.current.value),
            userProfileId: userProfile.id,
            difficultyId: parseInt(difficulty.current.value),
        }

        console.log(newGoalObject)
        return addGoal(newGoalObject)
            .then(setActionInput(false))
            .then(setGoalCompsSeen(true))
    }


    useEffect(() => {
        getAllGoalTypes();
        getAllDifficulties();
    }, []);

    return (
        <div className="newGoalForm">
            <form className='goalFormCard'>
                <h4 className='goalForm__title'>New Goal</h4>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='goalTitle'>Goal Title: </label>
                        <input
                            type='text'
                            id='goalTitle'
                            ref={title}
                            required
                            autoFocus
                            className='form-control'
                            placeholder='Goal Title'
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='goalDescription'>Goal Description: </label>
                        <textarea
                            type='text'
                            id='goalDescription'
                            ref={description}
                            required
                            autoFocus
                            className='form-control'
                            placeholder='Goal Description'
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='goalType'>Goal Type: </label>
                        <select
                            defaultValue=''
                            name='goalType'
                            ref={goalType}
                            id='goalType'
                            className='form-control'
                            placeholder='goalType'
                            required
                            autoFocus
                        >
                            <option value='0'>Select a Goal Type</option>
                            {goalTypes.map(gt => (
                                <option key={gt.id} value={gt.id}>
                                    {gt.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='postDifficulty'>Difficulty: </label>
                        <select
                            defaultValue=''
                            name='difficulty'
                            ref={difficulty}
                            id='difficulty'
                            className='form-control'
                            placeholder='difficulty'
                            required
                            autoFocus
                        >
                            <option value='0'>Select a Difficulty</option>
                            {difficulties.map(d => (
                                <option key={d.id} value={d.id}>
                                    {d.title}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <div className="goalForm_btns">
                    <Button
                        className="btns"
                        color="primary"
                        type='submit'
                        onClick={evt => {
                            evt.preventDefault() // Prevent browser from submitting the form
                            constructNewGoal()

                        }}>Save Goal
                    </Button>

                    <Button
                        className="btns"
                        color="secondary"
                        onClick={() => {
                            setActionInput(false)
                            setGoalCompsSeen(true)
                        }}>Cancel
                    </Button>
                </div>

            </form>
        </div>
    )
}
