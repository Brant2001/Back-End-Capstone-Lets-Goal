import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom"
import { format } from 'date-fns'

export const Goal = ({ goal }) => {
    return (
        <Card className="m-4 goal">
            <CardImg top src={goal.imageLocation} />
            <CardBody>
                <div className="goalTitle">
                    <Link to={`/goals/${goal.id}`}>
                        <h3>{goal.title}</h3>
                    </Link>
                </div>
                <div className="goalItems">
                    <p>Created: {format(new Date(goal.createDateTime), 'MM/dd/yyyy')}</p>
                </div>
            </CardBody>
        </Card>
    );
};