import React, { useState, useContext } from "react";
import { UserProfileContext } from "../user/UserProfileProvider";

export const GoalContext = React.createContext();

export const GoalProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [goals, setGoals] = useState([]);

    const apiUrl = '/api/goal'

    const getAllGoals = () => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
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
            }).then(resp => resp.json()).then(getAllGoals))
    };

    const updateGoal = (goal) => {
        debugger
        return getToken().then((token) =>
            fetch(`/api/goal/${goal.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(goal),
            }).then(() => getGoal(goal.id)))
    }

    const deleteGoal = (goal) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${goal.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(getAllGoals);
    }

    const getGoal = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    return (
        <GoalContext.Provider value={{
            goals, getAllGoals, addGoal, deleteGoal, getGoal, updateGoal
        }}>
            {props.children}
        </GoalContext.Provider>
    );
};
