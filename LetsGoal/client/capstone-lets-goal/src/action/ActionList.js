import React, { useContext, useEffect } from "react";
import { ActionContext } from "./ActionProvider";
import { Action } from "./Action";
import { Button } from "reactstrap";

export const ActionList = ({ setActiveView, goalId, actionStatus, setActionStatus }) => {
    const { actions, getActionsByGoalId } = useContext(ActionContext);
    console.log(actionStatus)
    const incompletedActions = actions.filter(ica => ica.isComplete === false)
    const completedActions = actions.filter(ca => ca.isComplete === true)

    const displayActions = () => {
        if (actionStatus === "incomplete") {
            return <>{
                incompletedActions.map((action) => (
                    <Action key={action.id} action={action} setActiveView={setActiveView} setActionStatus={setActionStatus} />
                ))
            }</>
        } else if (actionStatus === "complete") {
            return <>{
                completedActions.map((action) => (
                    <Action key={action.id} action={action} setActiveView={setActiveView} setActionStatus={setActionStatus} />
                ))
            }</>
        }
    }

    useEffect(() => {
        getActionsByGoalId(goalId);
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="actionList_btns">
                    {
                        (actionStatus === "incomplete")
                            ? <Button
                                className="viewCompleteActionsBtn"
                                color="secondary"
                                onClick={() => { setActionStatus("complete"); console.log(actionStatus) }}>
                                View Completed Actions
                              </Button>
                            : <Button
                                className="viewIncompleteActionsBtn"
                                color="secondary"
                                onClick={() => { setActionStatus("incomplete"); console.log(actionStatus) }}>
                                View Incompleted Actions
                              </Button>
                    }
                    <Button type="submit"
                        color="primary"
                        onClick={
                            evt => {
                                evt.preventDefault()
                                setActiveView({ view: "actionForm", currentAction: {} })
                            }
                        }
                        className="addActionBtn">
                        Add Action
                    </Button>
                </div>
                <div className="actionList_displayActions">
                    {
                        (actionStatus === "incomplete") ? <h4>Incompleted Actions</h4> : <h4>Completed Actions</h4>
                    }
                    {displayActions()}
                </div>
            </div>
        </div>
    );
};
