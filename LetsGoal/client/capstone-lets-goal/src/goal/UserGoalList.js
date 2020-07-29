import React, { useContext, useEffect } from "react";
import { UserGoal } from "./UserGoal";
import { UserGoalContext } from "./UserGoalProvider";

export const UserGoalList = () => {

    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    const { userGoals, getAllGoalsByUser } = useContext(UserGoalContext);

    useEffect(() => {
        getAllGoalsByUser(userProfile.id)
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {userGoals.map((userGoal) => (
                        <UserGoal key={userGoal.id} userGoal={userGoal} />
                    ))}
                </div>
            </div>
        </div>
    );
};
