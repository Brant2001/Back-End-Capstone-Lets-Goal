import React, { useEffect, useState, useContext } from 'react'
import { Button } from "reactstrap";
import { format } from 'date-fns'
import { ActionContext } from './ActionProvider';


export const ActionDetails = ({ currentAction, setActiveView, actionStatus, setActionStatus }) => {
    const [action, setAction] = useState()
    const { getAction, updateAction } = useContext(ActionContext);
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

    useEffect(() => {
        getAction(currentAction.id).then(act => {
            setAction(act)
        })
    }, [])

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

    if (!action || userProfile.id != action.goal.userProfileId) {
        return null
    }
    debugger
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
                    {
                        (action.userProfileId === userProfile.id)
                            ? <h5>{action.userProfile.fullName}</h5>
                            : <p>Anonymous user</p>
                    }
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
                    {
                        (action.isComplete === false)
                            ? <Button className="completeActionBtn" color="secondary" onClick={() => { completeAction(action); setActionStatus("complete") }}>Complete</Button>
                            : <Button className="incompleteActionBtn" color="secondary" onClick={() => { incompleteAction(action); setActionStatus("incomplete") }}>Not Complete</Button>

                    }
                </div>
            </div>
        </div>
    )
}

