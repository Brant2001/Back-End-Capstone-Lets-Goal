import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom"
import { format } from 'date-fns'

export const Action = ({ action }) => {
    return (
        <Card className="m-4 action">
            <CardImg top src={action.imageLocation} />
            <CardBody>
                <div className="actionTitle">
                    <Link to={`/actions/${action.id}`}>
                        <h3>{action.title}</h3>
                    </Link>
                </div>
                <div className="actionItems">
                    <p>Created: {format(new Date(action.createDateTime), 'MM/dd/yyyy')}</p>
                </div>
            </CardBody>
        </Card>
    );
};