import React, { useContext, useState } from "react";
import { Button } from "reactstrap";
import { format } from 'date-fns'
import { ActionContext } from "./ActionProvider";
import { EditActionForm } from "./EditActionForm";

export const Action = ({ setActiveView, action }) => {
    const { deleteAction } = useContext(ActionContext)
    const [actionInput, setInput] = useState(false)


    const displayInput = () => {
        if (actionInput === true) {
            return <EditActionForm action={action} />
        }
    }
    
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
            <div>
                <Button color="danger" onClick={evt => { evt.preventDefault(); deleteAction(action) }}>Delete</Button>
                <Button color="primary" onClick={evt => { evt.preventDefault(); setInput(true) }}>Edit</Button>
            </div>
            <div>{displayInput()}</div>
        </div>
    );
};