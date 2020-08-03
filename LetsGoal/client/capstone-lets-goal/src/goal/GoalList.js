import React, { useContext, useEffect, useState } from "react";
import { GoalContext } from "./GoalProvider";
import { Goal } from "./Goal";
import { Button } from "reactstrap";

export const GoalList = () => {
    const [goalStatus, setGoalStatus] = useState("incomplete")
    const { goals, getAllGoals } = useContext(GoalContext);
    const incompletedGoals = goals.filter(cg => cg.isComplete === false)
    const completedGoals = goals.filter(cg => cg.isComplete === true)

    const displayGoals = () => {
        if (goalStatus === "incomplete") {
            return <>{
                incompletedGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))
            }</>
        } else if (goalStatus === "complete") {
            return <>{
                completedGoals.map((goal) => (
                    <Goal key={goal.id} goal={goal} />
                ))
            }</>
        }
    }

    useEffect(() => {
        getAllGoals();
    }, []);

    return (
        <div className="container">
            <div className="goalList">
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
                    {displayGoals()}
                </div>
            </div>
        </div>
    );
};
