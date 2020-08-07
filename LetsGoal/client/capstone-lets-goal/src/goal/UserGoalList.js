import React, { useContext, useEffect, useState } from "react";
import { UserGoal } from "./UserGoal";
import { UserGoalContext } from "./UserGoalProvider";
import { Button } from "reactstrap";
import GoalForm from "./GoalForm";

export const UserGoalList = ({ goalStatus, setGoalStatus }) => {
    const [actionInput, setActionInput] = useState(false)
    const [goalCompsSeen, setGoalCompsSeen] = useState(true)
    const { userGoals, getAllGoalsByUser } = useContext(UserGoalContext);
    const incompletedGoals = userGoals.filter(icg => icg.isComplete === false)
    const completedGoals = userGoals.filter(cg => cg.isComplete === true)

    const displayGoals = () => {
        if (goalCompsSeen === true) {
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
        } else {
            return (
                <div></div>
            )
        }
    }

    const displayInput = () => {
        if (actionInput === true) {
            return <GoalForm setActionInput={setActionInput} setGoalCompsSeen={setGoalCompsSeen} />
        }
    }

    useEffect(() => {
        getAllGoalsByUser()
    }, []);

    return (
        <div className="container">
            <div className="userGoalList">
                <div className="userGoalList_btns">
                    <div>
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
                    <div className="userGoalList_Add">
                        <Button
                            type="submit"
                            color="primary"
                            onClick={
                                evt => {
                                    evt.preventDefault()
                                    setActionInput(true)
                                    setGoalCompsSeen(false)
                                }
                            }
                            className="addActionBtn">
                            Add Goal
                        </Button>
                    </div>
                </div>
                <div className="text-center">
                    {
                        (goalStatus === "incomplete") ? <h4>Incompleted Goals</h4> : <h4>Completed Goals</h4>
                    }
                </div>
                <div className="displayUserGoalComponents">
                    {displayGoals()}
                    {displayInput()}
                </div>
            </div>
        </div>
    );
};
