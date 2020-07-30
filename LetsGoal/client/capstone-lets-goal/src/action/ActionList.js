import React, { useContext, useEffect } from "react";
import { ActionContext } from "./ActionProvider";
import { Action } from "./Action";

export const ActionList = ({ goalId }) => {

    const { actions, getActionsByGoalId } = useContext(ActionContext);

    useEffect(() => {
        getActionsByGoalId(goalId);
    }, []);
    debugger
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
