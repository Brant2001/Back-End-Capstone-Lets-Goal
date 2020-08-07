import React from "react";
import { Link } from "react-router-dom"
import { format } from 'date-fns'


export const UserGoal = ({ userGoal }) => {

    return (
        <div className="m-4 userGoal">
            <div className="userGoalTitle">
                <Link to={`/goal/${userGoal.id}`}>
                    <h3>{userGoal.title}</h3>
                </Link>
            </div>
            <div className="userGoalItems">
                <p>Created: {format(new Date(userGoal.dateCreated), 'MM/dd/yyyy')}</p>
                <p>Goal Type: {userGoal.goalType.title}</p>
                <p>Difficulty: {userGoal.difficulty.title}</p>
            </div>
        </div>
    );
};