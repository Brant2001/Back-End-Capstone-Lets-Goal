import React, { useContext, useState, useEffect } from "react";
import { GoalContext } from "./GoalProvider";
import { Button, Form } from "reactstrap";
import { useHistory } from "react-router-dom";
import { GoalTypeContext } from "../goalType/GoalTypeProvider";
import { DifficultyContext } from "../difficulty/DifficultyProvider";

export const EditGoalForm = (props) => {
    const { updateGoal } = useContext(GoalContext);
    const { goalTypes, getAllGoalTypes } = useContext(GoalTypeContext);
    const { difficulties, getAllDifficulties } = useContext(DifficultyContext);
    const [goalUpdate, setGoal] = useState(props.goal);
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newGoal = Object.assign({}, goalUpdate);
        newGoal[event.target.name] = event.target.value;
        setGoal(newGoal);
    };

    useEffect(() => {
        getAllGoalTypes();
        getAllDifficulties();
    }, []);

    const editGoal = () => {
        goalUpdate.goalTypeId = parseInt(goalUpdate.goalTypeId);
        goalUpdate.difficultyId = parseInt(goalUpdate.difficultyId);
        updateGoal(goalUpdate).then(props.toggle).then(history.push(`/goal/${props.goal.id}`));
    };

    return (
        <>
            <Form className="editGoalForm">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">
                            Title:
                            <input
                                type="text"
                                name="title"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit Goal Title"
                                defaultValue={props.goal.title}
                                onChange={handleControlledInputChange}
                            />
                            Description:
                            <input
                                type="textarea"
                                name="description"
                                rows="20"
                                columns="50"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit description"
                                defaultValue={props.goal.description}
                                onChange={handleControlledInputChange}
                            />
                            Goal Type:
                            <select
                                name="goalTypeId"
                                required
                                className="form-control"
                                defaultValue={props.goal.goalType.title}
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
                                defaultValue={props.goal.difficulty.title}
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
                <Button onClick={props.toggle}>Cancel</Button>
            </Form>
        </>
    );
};