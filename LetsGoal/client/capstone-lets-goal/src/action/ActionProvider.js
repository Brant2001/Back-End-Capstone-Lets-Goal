import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const ActionContext = React.createContext();

export const ActionProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [actions, setActions] = useState([]);

    const apiUrl = '/api/action'

    const getAllActions = () => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            }).then(resp => resp.json())
                .then(setActions));
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
            }).then(resp => resp.json()).then(getAllActions))
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
            }).then(getAllActions));

    }

    const deleteAction = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(getAllActions);
    }

    const getAction = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    return (
        <ActionContext.Provider value={{
            actions, getAllActions, addAction, deleteAction, getAction, getAllActions, updateAction
        }}>
            {props.children}
        </ActionContext.Provider>
    );
};
