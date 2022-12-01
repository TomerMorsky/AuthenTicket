import React, { FC, useState } from "react";
import UsernameTextField from "../UserNameTextField/username-text-field";
import UserPasswordTextField from "../UserPasswordTextField/user-password-text-field";

const HomeScreen: FC = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <UsernameTextField userName={username} onUsernameChanged={setUsername}/>
            <UserPasswordTextField userPassword={password} onPasswordChanged={setPassword}/>
        </div>
    )
}

export default HomeScreen;