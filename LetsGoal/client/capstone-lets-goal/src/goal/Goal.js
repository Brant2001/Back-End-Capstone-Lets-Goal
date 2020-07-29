import React from "react";
import { Link } from "react-router-dom"
import { format } from 'date-fns'

export const Goal = ({ goal }) => {

    return (
        <div className="m-4 goal">
            <div className="goalTitle">
                <Link to={`/goal/${goal.id}`}>
                    <h3>{goal.title}</h3>
                </Link>
            </div>
            <div className="goalItems">
                <p>Created: {format(new Date(goal.dateCreated), 'MM/dd/yyyy')}</p>
                <p>Goal Type: {goal.goalType.title}</p>
                <p>Difficulty: {goal.difficulty.title}</p>
                <p>Completed Status: {goal.isComplete === true ? "True" : "False"}</p>
            </div>
        </div>
    );
};