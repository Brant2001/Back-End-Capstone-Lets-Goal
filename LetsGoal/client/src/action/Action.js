import React from "react";
import { Button } from "reactstrap";
import { format } from 'date-fns'

export const Action = ({ setActiveView, action }) => {

    return (
        <div className="m-4 action">
            <div className="actionTitle">
                <Button onClick={() => { setActiveView({ view: "actionDetails", currentAction: action }) }}>
                    <h5>{action.title}</h5>
                </Button>
            </div>
            <div className="actionDate">
                <p>Created: {format(new Date(action.dateCreated), 'MM/dd/yyyy')}</p>
            </div>
        </div>
    );
};