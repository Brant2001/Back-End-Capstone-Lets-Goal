import React, { useState, useContext } from "react";
import { UserProfileContext } from "../user/UserProfileProvider";

export const UserGoalContext = React.createContext();

export const UserGoalProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [userGoals, setGoals] = useState([]);

    const apiUrl = '/api/goal'

    const getAllGoalsByUser = (id) => {
        getToken().then((token) =>
            fetch(apiUrl + `/getbyuser/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setGoals));
    };

    const addGoal = (goal) => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(goal)
            }).then(resp => resp.json())
                .then(getAllGoalsByUser))
    };

    const deleteGoal = (goal) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${goal.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(() => getAllGoalsByUser(goal.userProfile.id))
    }

    return (
        <UserGoalContext.Provider value={{
            userGoals, getAllGoalsByUser, addGoal, deleteGoal
        }}>
            {props.children}
        </UserGoalContext.Provider>
    );
};
