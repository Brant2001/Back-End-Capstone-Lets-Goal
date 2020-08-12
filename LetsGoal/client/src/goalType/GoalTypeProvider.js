import React, { useState, useContext } from "react";
import { UserProfileContext } from "../user/UserProfileProvider";

export const GoalTypeContext = React.createContext();

export const GoalTypeProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [goalTypes, setGoalTypes] = useState([]);

    const apiUrl = '/api/goaltype'

    const getAllGoalTypes = () => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json())
                .then(setGoalTypes));
    };

    const getGoalType = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    return (
        <GoalTypeContext.Provider value={{
            goalTypes, getAllGoalTypes, getGoalType
        }}>
            {props.children}
        </GoalTypeContext.Provider>
    );
};
