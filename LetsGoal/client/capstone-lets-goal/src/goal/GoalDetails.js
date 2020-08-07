import React, { useEffect, useContext, useState } from 'react'
import { Button } from "reactstrap";
import { GoalContext } from './GoalProvider'
import { useParams, Link, useHistory } from 'react-router-dom'
import { format } from 'date-fns'
import { ActionDashboard } from '../action/ActionDashboard';
import { EditGoalForm } from './EditGoalForm';


export const GoalDetails = ({ goalStatus, setGoalStatus }) => {
    const [goal, setGoal] = useState()
    const [actionDash, setActionDash] = useState(true)
    const [editGoalInput, setEditGoalInput] = useState(false)
    const { getGoal, updateGoal, deleteGoal } = useContext(GoalContext);
    const { id } = useParams()
    const history = useHistory();
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    useEffect(() => {
        getGoal(id).then(setGoal)
    }, [])

    const displayActionDash = () => {
        if (actionDash === true) {
            return <ActionDashboard goalId={id} goalStatus={goalStatus} />
        }
    }

    const editGoalForm = () => {
        if (editGoalInput === true) {
            return <EditGoalForm goal={goal} setGoal={setGoal} setEditGoalInput={setEditGoalInput} />
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
        <div>
            <div className="userGoalDetails_btns">
                {
                    (goal.userProfileId === userProfile.id)
                        ? <Link className="backLink" to={'/'} ><Button className="backBtn secondary">Back to Goals</Button></Link>
                        : <Link className="backLink" to={'/goal'} ><Button className="backBtn secondary">Back to All Goals</Button></Link>
                }
                <div className="setWidth userGoalDetails_title">
                    <h3>{goal.title}</h3>
                </div>
                <Button color="danger" onClick={evt => { evt.preventDefault(); deleteGoal(goal); history.push("/") }}>Delete</Button>
            </div>
            <div className='col-sm-12 col-lg-6 userGoalDetails'>
                <div className="userGoalDetails_items">
                    <div className="userGoalDetails_specs">
                        <div>
                            <h5>Description :</h5>
                            {goal.description} <br /><br />
                        </div>
                        {
                            (goal.userProfileId === userProfile.id)
                                ? <div className="userGoalDetails_components">
                                    <div>
                                        <div>
                                            <h6>Goal Type:</h6>
                                            {goal.goalType.title} <br /><br />
                                        </div>
                                        <div>
                                            <h6>Difficulty:</h6>
                                            {goal.difficulty.title} <br /><br />
                                        </div>
                                        <div>
                                            <h6>Date Created:</h6>
                                            {format(new Date(goal.dateCreated), 'MM/dd/yyyy')} <br /><br />
                                        </div>
                                        <div className="isComplete-Edit-GoalBtn">
                                            {
                                                (goal.isComplete === false)
                                                    ? <Button className="setBtnWidth completeGoalBtn" color="secondary" onClick={() => { completeGoal(goal); setGoalStatus("complete"); history.push("/") }}>Complete</Button>
                                                    : <Button className="setBtnWidth incompleteGoalBtn" color="secondary" onClick={() => { incompleteGoal(goal); setGoalStatus("incomplete"); history.push("/") }}>Not Complete</Button>

                                            }
                                            <Button className="setBtnWidth" color="primary" onClick={evt => { evt.preventDefault(); setEditGoalInput(true) }}>Edit</Button>
                                        </div>
                                        <div>
                                            {editGoalForm()}
                                        </div>
                                    </div>
                                </div>
                                : <div></div>
                        }
                    </div>
                </div>
                {
                    (goal.userProfileId === userProfile.id)
                        ? <div className="userGoalDetails_actions">
                            {displayActionDash()}
                        </div>
                        : <div></div>
                }
            </div>
        </div>
    )
}

