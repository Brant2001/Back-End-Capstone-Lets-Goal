import React, { useEffect, useState, useContext } from 'react'
import { Button } from "reactstrap";
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { ActionContext } from './ActionProvider';


export const ActionDetails = ({ currentAction, setActiveView }) => {

    const [action, setAction] = useState()
    const { getAction } = useContext(ActionContext);
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

    useEffect(() => {
        getAction(currentAction.id).then(t => {
            setAction(t)
        })
    }, [])

    if (!action || userProfile.id != action.goal.userProfileId) {
        console.log(action, userProfile)
        return null
    }
    return (
        <div className='col-sm-12 col-lg-6'>
            <div className="actionLink">
                {
                    (action.isComplete === true)
                        ? <Link className="backLink" onClick={evt => { evt.preventDefault(); setActiveView({ view: "actionList", currentAction: action }) }}><Button className="backBtn secondary">Back to Actions</Button></Link>
                        : <Link className="backLink" onClick={evt => { evt.preventDefault(); setActiveView({ view: "completedList", currentAction: action }) }}><Button className="backBtn secondary">Back to Completed actions</Button></Link>
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
                </div>
            </div>
        </div>
    )
}

