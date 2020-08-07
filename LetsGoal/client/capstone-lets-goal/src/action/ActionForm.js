import React, { useContext, useRef, useEffect } from 'react'
import { DifficultyContext } from '../difficulty/DifficultyProvider'
import { ActionContext } from './ActionProvider'
import { Button } from 'reactstrap'

export const ActionForm = ({ goalId, setActiveView }) => {
    const { addAction } = useContext(ActionContext)
    const { difficulties, getAllDifficulties } = useContext(DifficultyContext);

    const title = useRef('title')
    const description = useRef('description')
    const difficulty = useRef('difficulty')

    const constructNewAction = () => {

        const newActionObject = {
            title: title.current.value,
            description: description.current.value,
            dateCreated: new Date(),
            goalId: parseInt(goalId),
            difficultyId: parseInt(difficulty.current.value),
            isComplete: false
        }

        console.log(newActionObject)
        return addAction(newActionObject).then(setActiveView({ view: "actionList", currentAction: {} }))
    }


    useEffect(() => {
        getAllDifficulties();
    }, []);

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
                        <textarea
                            type='text'
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
                <div className="actionForm_btns">
                    <Button
                        className='btn btn-primary'
                        color="primary"
                        onClick={evt => {
                            evt.preventDefault() // Prevent browser from submitting the form
                            constructNewAction()
                        }}>Save Action
                    </Button>
                    <Button
                        className="btns"
                        color="secondary"
                        onClick={() => {
                            setActiveView({ view: "actionList", currentAction: {} })
                        }}>Cancel
                    </Button>
                </div>
            </form>
        </div>
    )
}
