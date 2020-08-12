import React, { useContext, useState, useEffect } from "react";
import { ActionContext } from "./ActionProvider";
import { Button, Form } from "reactstrap";
import { DifficultyContext } from "../difficulty/DifficultyProvider";

export const EditActionForm = (props) => {
    const { updateAction } = useContext(ActionContext);
    const { difficulties, getAllDifficulties } = useContext(DifficultyContext);
    const [actionUpdate, setAction] = useState(props.action);

    const handleControlledInputChange = (event) => {
        const newAction = Object.assign({}, actionUpdate);
        newAction[event.target.name] = event.target.value;
        setAction(newAction);
    };

    useEffect(() => {
        getAllDifficulties();
    }, []);

    const editAction = () => {
        actionUpdate.actionTypeId = parseInt(actionUpdate.actionTypeId);
        actionUpdate.difficultyId = parseInt(actionUpdate.difficultyId);
        updateAction(actionUpdate).then(props.toggle).then(props.setInput(false));
    };

    return (
        <>
            <Form className="editActionForm">
                <fieldset>
                    <div className="form-group">
                        <label className="editActionLabel" htmlFor="title">
                            Title:
                            <input
                                type="text"
                                name="title"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit Action Title"
                                defaultValue={props.action.title}
                                onChange={handleControlledInputChange}
                            />

                            Description:
                            <textarea
                                type="text"
                                name="description"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit description"
                                defaultValue={props.action.description}
                                onChange={handleControlledInputChange}
                            />

                            Difficulty:
                            <select
                                name="difficultyId"
                                required
                                className="form-control"
                                defaultValue={props.action.difficulty.title}
                                onChange={handleControlledInputChange}
                            >
                                {difficulties.map((dif) => (
                                    <option key={dif.id} value={dif.id}>
                                        {dif.title}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </fieldset>

                <Button
                    color="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        editAction();
                    }}
                >
                    Save Updates
                </Button>
                <Button onClick={props.toggle}>Cancel</Button>
            </Form>
        </>
    );
};