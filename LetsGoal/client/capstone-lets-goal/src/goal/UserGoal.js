import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { format } from 'date-fns'
import { Button } from "reactstrap";
import { UserGoalContext } from "./UserGoalProvider";

export const UserGoal = ({ userGoal }) => {
    const { deleteGoal } = useContext(UserGoalContext)

    return (
        <div className="m-4 goal">
            <div className="userGoalTitle">
                <Link to={`/goal/${userGoal.id}`}>
                    <h3>{userGoal.title}</h3>
                </Link>
            </div>
            <div className="userGoalItems">
                <p>Created: {format(new Date(userGoal.dateCreated), 'MM/dd/yyyy')}</p>
                <p>Goal Type: {userGoal.goalType.title}</p>
                <p>Difficulty: {userGoal.difficulty.title}</p>
                <p>Completed Status: {userGoal.isComplete === true ? "True" : "False"}</p>
            </div>
            <div>
                <Button onClick={evt => { evt.preventDefault(); deleteGoal(userGoal) }}>Delete</Button>
            </div>
        </div>
    );
};