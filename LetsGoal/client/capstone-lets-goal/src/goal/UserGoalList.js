import React, { useContext, useEffect, useState } from "react";
import { UserGoal } from "./UserGoal";
import { UserGoalContext } from "./UserGoalProvider";
import { Button } from "reactstrap";
import GoalForm from "./GoalForm";

export const UserGoalList = () => {
    const [actionInput, setInput] = useState(false)
    const { userGoals, getAllGoalsByUser } = useContext(UserGoalContext);
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

    useEffect(() => {
        getAllGoalsByUser(userProfile.id)
    }, []);

    const displayInput = () => {
        if (actionInput === true) {
            return <GoalForm />
        }
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {userGoals.map((userGoal) => (
                        <UserGoal key={userGoal.id} userGoal={userGoal} />
                    ))}
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
                </div>
                <div>{displayInput()}</div>
            </div>
        </div>
    );
};
