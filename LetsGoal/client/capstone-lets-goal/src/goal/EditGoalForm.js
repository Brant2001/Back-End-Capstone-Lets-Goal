import React, { useContext, useState, useEffect } from "react";
import { GoalContext } from "./GoalProvider";
import { Button, Form } from "reactstrap";
import { GoalTypeContext } from "../goalType/GoalTypeProvider";
import { DifficultyContext } from "../difficulty/DifficultyProvider";

export const EditGoalForm = ({ goal, setEditGoalInput }) => {
    const { updateGoal } = useContext(GoalContext);
    const { goalTypes, getAllGoalTypes } = useContext(GoalTypeContext);
    const { difficulties, getAllDifficulties } = useContext(DifficultyContext);
    const [goalUpdate, setGoalUpdate] = useState(goal);

    const handleControlledInputChange = (event) => {
        const newGoal = Object.assign({}, goalUpdate);
        newGoal[event.target.name] = event.target.value;
        setGoalUpdate(newGoal);
    };

    useEffect(() => {
        getAllGoalTypes();
        getAllDifficulties();
    }, []);

    const editGoal = () => {
        goalUpdate.goalTypeId = parseInt(goalUpdate.goalTypeId);
        goalUpdate.difficultyId = parseInt(goalUpdate.difficultyId);
        updateGoal(goalUpdate)
            .then(setEditGoalInput(false))
    };

    return (
        <>
            <Form className="editGoalForm">
                <fieldset>
                    <div className="form-group">
                        <label className="editGoalLabel" htmlFor="title">
                            Title:
                            <input
                                type="text"
                                name="title"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit Goal Title"
                                defaultValue={goal.title}
                                onChange={handleControlledInputChange}
                            />
                            Description:
                            <textarea
                                type="text"
                                name="description"
                                rows="20"
                                columns="50"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit description"
                                defaultValue={goal.description}
                                onChange={handleControlledInputChange}
                            />
                            Goal Type:
                            <select
                                name="goalTypeId"
                                required
                                className="form-control"
                                defaultValue={goal.goalType.title}
                                onChange={handleControlledInputChange}
                            >
                                {goalTypes.map((gt) => (
                                    <option key={gt.id} value={gt.id}>
                                        {gt.title}
                                    </option>
                                )
                                )}
                            </select>
                            Difficulty:
                            <select
                                name="difficultyId"
                                required
                                className="form-control"
                                defaultValue={goal.difficulty.title}
                                onChange={handleControlledInputChange}
                            >
                                {difficulties.map((gt) => (
                                    <option key={gt.id} value={gt.id}>
                                        {gt.title}
                                    </option>
                                )
                                )}
                            </select>
                        </label>
                    </div>
                </fieldset>

                <Button
                    color="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        editGoal();
                    }}
                >
                    Save Updates
                </Button>
                <Button>Cancel</Button>
            </Form>
        </>
    );
};