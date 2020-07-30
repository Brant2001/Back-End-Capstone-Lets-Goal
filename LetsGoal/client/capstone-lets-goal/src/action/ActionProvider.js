import React, { useState, useContext } from "react";
import { UserProfileContext } from "../user/UserProfileProvider";

export const ActionContext = React.createContext();

export const ActionProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [actions, setActions] = useState([]);

    const apiUrl = '/api/action'

    const getActionsByGoalId = (id) => {
        debugger
        return getToken().then((token) =>
            fetch(apiUrl + `/getbygoal/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json())
                .then(setActions));
    };

    const getAction = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    const addAction = (action) => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(action)
            }).then(resp => resp.json()).then(getActionsByGoalId(action.goalId)))
    };

    const updateAction = (action) => {
        return getToken().then((token) =>
            fetch(apiUrl + `${action.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(action),
            }).then(getActionsByGoalId(action.goalId)));

    }

    const deleteAction = (action) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${action.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(getActionsByGoalId(action.goalId));
    }


    return (
        <ActionContext.Provider value={{
            actions, getActionsByGoalId, addAction, getAction, updateAction, deleteAction
        }}>
            {props.children}
        </ActionContext.Provider>
    );
};
