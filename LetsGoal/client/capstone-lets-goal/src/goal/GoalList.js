import React, { useContext, useEffect } from "react";
import { GoalContext } from "./GoalProvider";
import { Goal } from "./Goal";

export const GoalList = () => {
    const { goals, getAllGoals } = useContext(GoalContext);

    useEffect(() => {
        getAllGoals();
    }, []);

    return (
        <div className="container">
            <div className="goalList">
                <div className="goalList_btns">
                    {
                        goals.map((goal) => (
                            <Goal key={goal.id} goal={goal} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
