import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "./user/UserProfileProvider";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { GoalList } from "./goal/GoalList";
import { UserGoalList } from "./goal/UserGoalList";
import { GoalDetails } from "./goal/GoalDetails";

export default function ApplicationViews() {
    const { isLoggedIn } = useContext(UserProfileContext);

    return (
        <main>
            <Switch>
                <Route path="/" exact>
                    {isLoggedIn ? <UserGoalList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/goal" exact>
                    {isLoggedIn ? <GoalList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/goal/:id" exact>
                    {isLoggedIn ? <GoalDetails /> : <Redirect to="/login" />}
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>
            </Switch>
        </main>
    );
};