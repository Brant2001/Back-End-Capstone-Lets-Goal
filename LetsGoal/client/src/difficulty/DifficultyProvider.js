import React, { useState, useContext } from "react";
import { UserProfileContext } from "../user/UserProfileProvider";

export const DifficultyContext = React.createContext();

export const DifficultyProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [difficulties, setDifficulties] = useState([]);

    const apiUrl = '/api/difficulty'

    const getAllDifficulties = () => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-": "application/json"
                }
            }).then(resp => resp.json())
                .then(setDifficulties));
    };

    const getDifficulty = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    return (
        <DifficultyContext.Provider value={{
            difficulties, getAllDifficulties, getDifficulty
        }}>
            {props.children}
        </DifficultyContext.Provider>
    );
};
