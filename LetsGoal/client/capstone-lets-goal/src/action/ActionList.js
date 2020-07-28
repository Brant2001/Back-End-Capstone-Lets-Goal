import React, { useContext, useEffect } from "react";
import { ActionContext } from "./ActionProvider";
import { Action } from "./Action";

export const ActionList = () => {

    const { actions, getAllActions } = useContext(ActionContext);

    useEffect(() => {
        getAllActions();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {actions.map((action) => (
                        <Action key={action.id} action={action} />
                    ))}
                </div>
            </div>
        </div>
    );
};
