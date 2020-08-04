import React, { useEffect, useContext, useState } from 'react'
import { Button } from "reactstrap";
import { GoalContext } from './GoalProvider'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { ActionDashboard } from '../action/ActionDashboard';
import { ActionForm } from '../action/ActionForm';


export const GoalDetails = ({ setGoalStatus }) => {
    const [goal, setGoal] = useState()
    const [actionDash, setActionDash] = useState(false)
    const [actionInput, setInput] = useState(false)
    const { getGoal, updateGoal } = useContext(GoalContext);
    const { id } = useParams()
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

    useEffect(() => {
        getGoal(id).then(setGoal)
    }, [])

    const displayActionDash = () => {
        if (actionDash === true) {
            return <ActionDashboard goalId={id} />
        }
    }

    const displayInput = () => {
        if (actionInput === true) {
            return <ActionForm goalId={id} />
        }
    }

    const completeGoal = (goal) => {
        return updateGoal({
            id: parseInt(goal.id),
            title: goal.title,
            description: goal.description,
            goalTypeId: goal.goalTypeId,
            difficultyId: goal.difficultyId,
            dateCreated: goal.dateCreated,
            userProfileId: goal.userProfile.id,
            isComplete: true
        })
    }

    const incompleteGoal = (goal) => {
        return updateGoal({
            id: parseInt(goal.id),
            title: goal.title,
            description: goal.description,
            goalTypeId: goal.goalTypeId,
            difficultyId: goal.difficultyId,
            dateCreated: goal.dateCreated,
            userProfileId: goal.userProfile.id,
            isComplete: false
        })
    }

    if (!goal) {
        return null
    }

    return (
        <div className='col-sm-12 col-lg-6'>
            <div className="goalLink">
                {
                    (goal.userProfileId === userProfile.id)
                        ? <Link className="backLink" to={'/'} onClick={() => setGoalStatus("complete")}><Button className="backBtn secondary">Back to My Goals</Button></Link>
                        : <Link className="backLink" to={'/goal'} onClick={() => setGoalStatus("incomplete")}><Button className="backBtn secondary">Back to All Goals</Button></Link>
                }
            </div>
            <div className="m-4 goalDetails">
                <div className="goalTitle">
                    <h3>{goal.title}</h3>
                    {
                        (goal.userProfileId === userProfile.id)
                            ? <h5>{goal.userProfile.fullName}</h5>
                            : <p>Anonymous user</p>
                    }
                </div>
                <div className="goalItems">
                    <div>
                        Description : <br />
                        {goal.description} <br /><br />
                    </div>
                    {
                        (goal.userProfileId === userProfile.id)
                            ? <div>
                                <div>
                                    Goal Type: <br />
                                    {goal.goalType.title} <br /><br />
                                </div>
                                <div>
                                    Difficulty: <br />
                                    {goal.difficulty.title} <br /><br />
                                </div>
                                <div>
                                    Date Created: <br />
                                    {format(new Date(goal.dateCreated), 'MM/dd/yyyy')} <br /><br />
                                </div>
                                {
                                    (goal.isComplete === false)
                                        ? <Button className="completeGoalBtn" color="secondary" onClick={() => { completeGoal(goal) }}>Complete</Button>
                                        : <Button className="incompleteGoalBtn" color="secondary" onClick={() => { incompleteGoal(goal) }}>Not Complete</Button>

                                }

                                <div className="actionBtns">
                                    <Button className="viewActionBtn" color="secondary"
                                        onClick={
                                            () => {
                                                setActionDash(true)
                                            }
                                        }>View Actions
                                    </Button>

                                    <Button className="hideActionBtn" color="secondary"
                                        onClick={
                                            () => {
                                                setActionDash(false)
                                            }
                                        }>Hide Actions
                                    </Button>

                                    <Button type="submit"
                                        color="primary"
                                        onClick={
                                            evt => {
                                                evt.preventDefault()
                                                setInput(true)
                                            }
                                        }
                                        className="addActionBtn">
                                        Add Action
                                    </Button>
                                </div>

                                <div>
                                    {displayActionDash()}
                                </div>

                                <div>
                                    {displayInput()}
                                </div>
                            </div>
                            : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

