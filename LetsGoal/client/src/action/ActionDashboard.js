import React, { useState, useEffect } from "react";
import { ActionList } from "./ActionList"
import { ActionDetails } from "./ActionDetails";
import { ActionForm } from "./ActionForm";

export const ActionDashboard = ({ goalId, goalStatus }) => {
    const [components, setComponents] = useState()
    const [actionStatus, setActionStatus] = useState(goalStatus)
    const [activeView, setActiveView] = useState({
        view: "actionList",
        currentAction: {}
    })


    // Components needed to display Actions
    const showActionList = () => {
        console.log(actionStatus)
        return < ActionList setActiveView={setActiveView} goalId={goalId} actionStatus={actionStatus} setActionStatus={setActionStatus} />
    }

    // Components needed to display Action Details
    const showActionDetails = () => (
        <ActionDetails currentAction={activeView.currentAction} setActiveView={setActiveView} actionStatus={actionStatus} setActionStatus={setActionStatus} />
    )

    const showActionForm = () => (
        <ActionForm goalId={goalId} setActiveView={setActiveView} />
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeView` variable.
    */
    useEffect(() => {
        if (activeView.view === "actionList") {
            setComponents(showActionList)
        }
        else if (activeView.view === "actionDetails") {
            setComponents(showActionDetails)
        }
        else if (activeView.view === "actionForm") {
            setComponents(showActionForm)
        }
        else {
            setComponents(showActionList)
        }
        // else if (activeView.view === "logs") {
        //     setComponents(showLogs)
        // }
        console.log(activeView)
    }, [activeView, actionStatus])

    return (
        // <Link className="viewActionBtn" color="secondary"
        //     onClick={
        //         evt => {
        //             evt.preventDefault()
        //             setActionList(true)
        //         }
        //     }>View Actions
        // </Link>
        <div>
            {components}
        </div>
    )

}