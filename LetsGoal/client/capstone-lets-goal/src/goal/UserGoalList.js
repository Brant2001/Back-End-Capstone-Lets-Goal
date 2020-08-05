import React, { useContext, useEffect, useState } from "react";
import { UserGoal } from "./UserGoal";
import { UserGoalContext } from "./UserGoalProvider";
import { Button } from "reactstrap";
import GoalForm from "./GoalForm";

export const UserGoalList = ({ goalStatus, setGoalStatus }) => {
    const [actionInput, setInput] = useState(false)
    const { userGoals, getAllGoalsByUser } = useContext(UserGoalContext);
    const incompletedGoals = userGoals.filter(icg => icg.isComplete === false)
    const completedGoals = userGoals.filter(cg => cg.isComplete === true)

    const displayGoals = () => {
        if (goalStatus === "incomplete") {
            return <>{
                incompletedGoals.map((userGoal) => (
                    <UserGoal key={userGoal.id} userGoal={userGoal} />
                ))
            }</>
        } else if (goalStatus === "complete") {
            return <>{
                completedGoals.map((userGoal) => (
                    <UserGoal key={userGoal.id} userGoal={userGoal} />
                ))
            }</>
        }
    }

    const displayInput = () => {
        if (actionInput === true) {
            return <GoalForm />
        }
    }

    useEffect(() => {
        getAllGoalsByUser()
    }, []);

    return (
        <div className="container">
            <div className="goalList_btns">
                {
                    (goalStatus === "incomplete")
                        ? <Button
                            className="viewCompleteGoalsBtn"
                            color="secondary"
                            onClick={() => { setGoalStatus("complete") }}>
                            View Completed Goals
                          </Button>
                        : <Button
                            className="viewIncompleteGoalsBtn"
                            color="secondary"
                            onClick={() => { setGoalStatus("incomplete") }}>
                            View Incompleted Goals
                          </Button>
                }
            </div>
            <div>
                {
                    (goalStatus === "incomplete") ? <h4>Incompleted Goals</h4> : <h4>Completed Goals</h4>
                }
                {displayGoals()}
            </div>
            <Button type="submit"
                color="primary"
                onClick={
                    evt => {
                        evt.preventDefault()
                        setInput(true)
                    }
                }
                className="addActionBtn">
                Add Goal
                </Button>
            <div>
                {displayInput()}
            </div>
        </div>
    );
};
