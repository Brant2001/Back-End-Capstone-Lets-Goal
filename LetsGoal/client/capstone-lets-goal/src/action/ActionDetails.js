import React, { useEffect, useState, useContext } from 'react'
import { Button } from "reactstrap";
import { format } from 'date-fns'
import { ActionContext } from './ActionProvider';
import { EditActionForm } from './EditActionForm';


export const ActionDetails = ({ currentAction, setActiveView, actionStatus, setActionStatus }) => {
    const [action, setAction] = useState()
    const [actionInput, setInput] = useState(false)
    const { deleteAction } = useContext(ActionContext)
    const { getAction, updateAction } = useContext(ActionContext);
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    const displayInput = () => {
        if (actionInput === true) {
            return <EditActionForm action={action} />
        }
    }

    const completeAction = (action) => {
        return updateAction({
            id: parseInt(action.id),
            title: action.title,
            description: action.description,
            difficultyId: action.difficultyId,
            dateCreated: action.dateCreated,
            goalId: action.goalId,
            isComplete: true
        })
    }

    const incompleteAction = (action) => {
        return updateAction({
            id: parseInt(action.id),
            title: action.title,
            description: action.description,
            difficultyId: action.difficultyId,
            dateCreated: action.dateCreated,
            goalId: action.goalId,
            isComplete: false
        })
    }

    useEffect(() => {
        getAction(currentAction.id).then(act => {
            setAction(act)
        })
    }, [])

    if (!action || userProfile.id != action.goal.userProfileId) {
        return null
    }

    return (
        <div className='col-sm-12 col-lg-6'>
            <div className="actionLink">
                {
                    (action.isComplete === true)
                        ? <Button className="backBtn secondary" onClick={() => { setActiveView({ view: "actionList", currentAction: action }) }}>Back to Actions</Button>
                        : <Button className="backBtn secondary" onClick={() => { setActiveView({ view: "completedList", currentAction: action }) }}>Back to Completed actions</Button>
                }
            </div>
            <div className="m-4 actionDetails">
                <div className="actionTitle">
                    <h3>{action.title}</h3>
                </div>

                <div className="actionItems">
                    Description: <br />
                    {action.description} <br /><br />
                    <div>
                        Difficulty: <br />
                        {action.difficulty.title} <br /><br />
                    </div>
                    <div>
                        Date Created: <br />
                        {format(new Date(action.dateCreated), 'MM/dd/yyyy')} <br /><br />
                    </div>
                    <div>
                        <Button color="danger" onClick={evt => { evt.preventDefault(); deleteAction(action) }}>Delete</Button>
                        <Button color="primary" onClick={evt => { evt.preventDefault(); setInput(true) }}>Edit</Button>
                    </div>
                    <div className="action_displayEditForm">
                        {displayInput()}
                    </div>
                    {
                        (action.isComplete === false)
                            ? <Button className="completeActionBtn" color="secondary" onClick={() => { completeAction(action); setActionStatus("complete"); setActiveView("actionList") }}>Complete</Button>
                            : <Button className="incompleteActionBtn" color="secondary" onClick={() => { incompleteAction(action); setActionStatus("incomplete"); setActiveView("actionList") }}>Not Complete</Button>

                    }
                </div>
            </div>
        </div>
    )
}

