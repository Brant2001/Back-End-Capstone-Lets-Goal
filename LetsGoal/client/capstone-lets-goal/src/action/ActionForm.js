import React, { useContext, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { DifficultyContext } from '../difficulty/DifficultyProvider'
import { ActionContext } from './ActionProvider'

export const ActionForm = (goalId) => {
    const { addAction } = useContext(ActionContext)
    const { difficulties, getAllDifficulties } = useContext(DifficultyContext);
    const history = useHistory()

    const title = useRef('title')
    const description = useRef('description')
    const difficulty = useRef('difficulty')

    const constructNewAction = () => {

        const newActionObject = {
            title: title.current.value,
            description: description.current.value,
            dateCreated: new Date(),
            goalId: parseInt(goalId.goalId),
            difficultyId: parseInt(difficulty.current.value),
        }

        console.log(newActionObject)
        return addAction(newActionObject)
    }


    useEffect(() => {
        getAllDifficulties();
    }, []);
    debugger
    return (
        <div className="newActionForm">
            <form className='actionFormCard'>
                <h2 className='actionForm__title'>New Action</h2>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='actionTitle'>Action Title: </label>
                        <input
                            type='text'
                            id='actionTitle'
                            ref={title}
                            required
                            autoFocus
                            className='form-control'
                            placeholder='Action Title'
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='actionDescription'>Action Description: </label>
                        <input
                            type='textarea'
                            id='actionDescription'
                            ref={description}
                            required
                            autoFocus
                            className='form-control'
                            placeholder='Action Description'
                        />
                    </div>
                </fieldset>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='actionDifficulty'>Difficulty: </label>
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

                <button
                    type='submit'
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAction()

                    }}
                    className='btn btn-primary'
                >
                    Save Action
      </button>
            </form>
        </div>
    )
}
