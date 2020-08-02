import React, { useState, useEffect } from "react";
import { ActionList } from "./ActionList"
import { ActionDetails } from "./ActionDetails";

export const ActionDashboard = ({ goalId }) => {
    const [activeView, setActiveView] = useState({
        view: "actionList",
        currentAction: {}
    })

    const [components, setComponents] = useState()


    // Components needed to display Actions
    const showActionList = () => (
        <ActionList setActiveView={setActiveView} goalId={goalId} />
    )

    // Components needed to display Action Details
    const showActionDetails = () => (
        <ActionDetails currentAction={activeView.currentAction} setActiveView={setActiveView} />
    )

    // Components needed to display Logs
    //const showLogs = () => (
    //)

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeView.view === "actionList") {
            setComponents(showActionList)
        }
        else if (activeView.view === "actionDetails") {
            setComponents(showActionDetails)
        }
        else {
            setComponents(showActionList)
        }
        // else if (activeView.view === "logs") {
        //     setComponents(showLogs)
        // }
    }, [activeView])

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