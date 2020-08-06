import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../user/UserProfileProvider";

export default function Register() {
    const history = useHistory();
    const { register } = useContext(UserProfileContext);

    const [firstName, setFName] = useState();
    const [lastName, setLName] = useState();
    const [displayName, setDName] = useState();
    const [imageUrl, setImage] = useState();
    const [isPublic, setIsPublic] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Try again.");
        } else {
            const userProfile = { firstName, lastName, displayName, imageUrl, isPublic, email };
            register(userProfile, password)
                .then(() => history.push("/"));
        }
    };

    return (
        <Form onSubmit={registerClick}>
            <fieldset className="registerForm">
                <FormGroup>
                    <Label htmlFor="firstName">FirstName</Label>
                    <Input id="firstName" type="text" onChange={e => setFName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">LastName</Label>
                    <Input id="lastName" type="text" onChange={e => setLName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="displayName">DisplayName</Label>
                    <Input id="displayName" type="text" onChange={e => setDName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="image">Profile Picture</Label>
                    <Input id="image" type="text" onChange={e => setImage(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <div>Public</div>
                    <div className="public_checkbox"><Input id="isPublic" type="checkbox" onChange={e => setIsPublic(e.target.checked)} /></div>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button>Register</Button>
                </FormGroup>
            </fieldset>
        </Form>
    );
}