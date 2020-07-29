import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { GoalContext } from './GoalProvider'
import { useParams, Link, useHistory } from 'react-router-dom'
import { format } from 'date-fns'


export const GoalDetails = () => {
    const [goal, setGoal] = useState()
    const [actionInput, setInput] = useState(false)
    const { getGoal } = useContext(GoalContext);
    const { id } = useParams()
    const history = useHistory();
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

    useEffect(() => {
        getGoal(id).then(setGoal)
    }, [])

    // const displayInput = () => {
    //     if (actionInput === true) {
    //         return <ActionForm goalId={id} />
    //     }
    // }

    // const ViewActions = () => {
    //     return history.push(`/actions/${id}`)
    // }

    if (!goal) {
        return null
    }

    return (
        <div className='col-sm-12 col-lg-6'>
            <div className="backLink">
                {
                    (goal.userProfileId === userProfile.id)
                        ? <Link className="backLink" to={'/'}><Button className="backBtn secondary">Back to My Goals</Button></Link>
                        : <Link className="backLink" to={'/goal'}><Button className="backBtn secondary">Back to All Goals</Button></Link>
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
                    Description: <br />
                    {goal.description} <br /><br />
                    <div>
                        Goal Type: <br />
                        {goal.goalType.title} <br /><br />
                    </div>
                    <div>
                        Difficulty: <br />
                        {goal.difficulty.title} <br /><br />
                    </div>
                    <div>
                        Date Published: <br />
                        {format(new Date(goal.dateCreated), 'MM/dd/yyyy')} <br /><br />
                    </div>
                </div>

                {/* <div className="actionBtns">
                        <Button className="viewActionBtn" color="secondary"
                            onClick={
                                evt => {
                                    evt.preventDefault()
                                    ViewActions()
                                }
                            }>View Actions
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
                        {displayInput()}
                    </div> */}
            </div>
        </div>
    )
}

